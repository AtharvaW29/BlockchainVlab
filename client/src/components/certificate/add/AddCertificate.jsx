import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import IconButton from '@mui/material/IconButton';
import web3 from '../../../getWeb3';
import CertificateContract from '../../../contracts/Certificate.json';
import FailedBlockchain from '../../other/error/failed/Failed';
import Loader from '../../other/loader/Loader';
import './AddCertificate.css';
import PersistentDrawerLeft from '../../other/drawer/Drawer'

const GAS_LIMIT = 6721975;
const pages = [
    { id: 1, name: 'Aim', path: '/Expt1' },
    { id: 2, name: 'Theory', path: '/Theory' },
    { id: 3, name: 'Procedure', path: '/Procedure' },
    { id: 4, name: 'Simulation', path: '/Simulation' },
    { id: 5, name: 'Observation', path: '/Observation' }
  ];
  
class AddCertificate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: '',
            lname: '',
            certificateId: '',
            courseName: '',
            issuingAuthority: '',
            issueDate: '',
            receiverAddress: '',
            web3: null,
            account: '',
            receipt: null,
            isReceiptGenerated: false,
            isLoading: false,
            contract: null
        }
        this.loadBlockchain = this.loadBlockchain.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        try {
            await this.loadBlockchain();
            // Continue with other logic after loadBlockchain is completed
        } catch (error) {
            // Handle errors here
            console.error(error);
        }
    }

    async loadBlockchain() {
        try {
            const givenProvider = await web3.givenProvider;
            console.log('web3  ::::', web3);
    
            if (givenProvider !== null) {
                this.setState({
                    isConnected: true,
                });
            }
    
            if (this.state.isConnected) {
                const accounts = await web3.eth.getAccounts(); 
                // const accounts = ['0x018b0C73453f3371a3876107d7591d6fB87713a5']
                // HTTP://127.0.0.1:7545
                console.log(accounts)
                if (accounts === undefined) {
                    console.log("Not connected to MetaMask")
                    this.setState({
                        isFailed: true,
                    });
                }
                console.log("Contract Address: " + CertificateContract.networks[5777])
                console.log('metamask account :-', accounts[0]);
                // web3.eth.accounts.wallet.add(accounts[0]);
                web3.eth.accounts.wallet.load(accounts[0])
    
                const networkId = await web3.eth.net.getId();
                console.log("Network ID is: ", networkId)
                const deployedNetwork = CertificateContract.networks[networkId];
                const instance = new web3.eth.Contract(
                    CertificateContract.abi,
                    '0xD84A684B6E70F225a51491e485Aa4f3EDD76a722',
                );
    
                this.setState({
                    web3,
                    account: accounts[0],
                    contract: instance,
                });
            } else {
                throw new Error("Not connected to Ethereum");
            }
        } catch (error) {
            // Handle errors here
            console.error(error);
            throw error; // Re-throw the error to be caught in componentDidMount
        }
    

            // if(accounts === undefined) {
            //     this.setState({
            //         isFailed: true
            //     });
            // }
            // console.log('metamask account :-', accounts[0]);
            // await web3.eth.accounts.wallet.add(accounts[0]);

            // const networkId = await web3.eth.net.getId();
            // const deployedNetwork = CertificateContract.networks[networkId];
            // // const instance = new web3.eth.Contract(
            // //     CertificateContract.abi,
            // //     deployedNetwork && deployedNetwork.address,
            // // );

            // const instance = new web3.eth.Contract(
            //     CertificateContract.abi,
            //     CertificateContract.address,
            // );

            // this.setState({
            //     web3,
            //     account: accounts[0],
            //     contract: instance
            // });
        }
    

    handleChange(event) {
        let change = {};
        change[event.target.name] = event.target.value;
        this.setState(change);
    }

    async handleSubmit(event) {
        event.preventDefault();

        this.setState({
            isLoading: true,
        });

        const contract = this.state.contract;
        console.log(contract)

        const addCertificateParams = {
            userName: this.state.fname + ' ' + this.state.lname,
            id: this.state.certificateId,
            courseName: this.state.courseName,
            issuingAuthority: this.state.issuingAuthority,
            issueDate: Date.parse(this.state.issueDate),
            receiverAddress: this.state.receiverAddress,
            accountAddress: this.state.account,
        }

        console.log('add cert params :-', addCertificateParams);
        try{const txReceipt = await contract.methods.addCertificate( 
            addCertificateParams.userName,
            addCertificateParams.id,
            addCertificateParams.courseName,
            addCertificateParams.issuingAuthority,
            addCertificateParams.issueDate,
            addCertificateParams.accountAddress
        ).send({
            from: this.state.account,
            gas: GAS_LIMIT,
         });
         console.log(txReceipt)
        
        console.log('tx receipt :-', JSON.stringify(txReceipt));

        const receiptData = {
            transactionHash: txReceipt.transactionHash,
            blockHash: txReceipt.blockHash,
            blockNumber: txReceipt.blockNumber,
            from: txReceipt.from,
            to: txReceipt.to,
            gasUsed: txReceipt.gasUsed,
            cumulativeGasUsed: txReceipt.cumulativeGasUsed
        }

        this.setState({
            isReceiptGenerated: true,
            receipt: receiptData
        });

        this.setState({
            isLoading: false,
        });}catch(err){console.log(err)}
    }
    

    render () {
        const CodeSnippet = `pragma solidity >=0.5.0;

        contract Certificate {
        
            /** Struct */
        
            struct Cert {
                string userName;
                string id;
                string courseName;
                string issuingAuthority;
                uint256 issueDate;
                address user;
                bool isAdded;
            }
        
        
            /** Mappings */
        
            /** Mapping for certificates */
            mapping (address => mapping(string => Cert)) public certificates;
        
        
            /** Public functions */
        
            function addCertificate(
                string memory _userName,
                string memory _id,
                string memory _courseName,
                string memory _issuingAuthority,
                uint256 _issueDate,
                address _user
            ) public {
                require(
                    certificates[_user][_id].isAdded == false,
                    "Certificate must not be already added."
                );
        
                require(
                    bytes(certificates[_user][_id].id).length == 0,
                    "Certificate id must be empty."
                );
        
                Cert memory cert = Cert({
                    userName: _userName,
                    id: _id,
                    courseName: _courseName,
                    issuingAuthority: _issuingAuthority,
                    issueDate: _issueDate,
                    user: _user,
                    isAdded: true
                });
        
                certificates[_user][_id] = cert;
            }
        
            function getCertificate(address _user, string memory _id)
                public
                view
                returns(string memory, string memory, string memory, uint256) {
                    require(
                        _user != address(0),
                        "User address must not be empty"
                    );
                    require(
                        bytes(_id).length != 0,
                        "Certificate id must not be empty."
                    );
        
                    return (
                        certificates[_user][_id].userName,
                        certificates[_user][_id].issuingAuthority,
                        certificates[_user][_id].courseName,
                        certificates[_user][_id].issueDate
                    );
            }
        }`;

  const handleCopyClick = ()=>{
    navigator.clipboard.writeText(CodeSnippet)
  }
        if(!this.state.isConnected) {
            return (
                <FailedBlockchain error="Please check your Metamask is working and you are logged in !"/>
            );
        }

        if(this.state.isLoading) {
            return (
                <Loader />
            );
        }

        else {
            return (
                <div className="bg-gradient-to-br from-white to-white min-h-screen text-black justify-center items-center">
                    <PersistentDrawerLeft pages={pages} />
                    <div className="account-address">
                        <dl className="dl-horizontal row">
                            <dt className="col-5">Ethereum Account Address: </dt>
                            <dd className="col-7">{this.state.account}</dd>
                        </dl>
                    </div>
                        <span variant="h2" className='mt-10 mb-10 justify-center items-center'
                        style={{
                            fontFamily: 'Myriad Pro',
                            fontSize: 28,
                            fontWeight: 600,
                        }}>
                            Study the Code below Carefully and follow the given steps
                        </span>
                <Container
                sx={{
                    display: {md:'flex', xs:'block', lg: 'block'},
                    '& > :not(style)': {
                    m: 1,
                    },}}>
                  <Paper variant="outlined" elevation={6}
                    sx={{backgroundColor: '#003B73',}}>
                              <Typography variant="h6" gutterBottom style={{color:'#ffffff'}}> 
                                Solidity Contract Code
                                <IconButton
                                aria-label="copy code"
                                onClick={handleCopyClick}
                                style={{ position: 'relative' }}
                            >
                                <FileCopyIcon />
                            </IconButton>
                            </Typography>
                            <Typography variant="body2" style={{ 
                                whiteSpace: 'pre-wrap',
                                fontFamily: 'monospace',
                                color: '#ffffff',
                                textAlign: 'left'
                                }}>
                                {CodeSnippet}
                            </Typography>
                            </Paper>
                    <form className="form">
                        <div className="form-group row">
                            <label htmlFor="fname" className="col-sm-4 col-form-label">Enter First Name: </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fname"
                                    value={this.state.fname}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lname" className="col-sm-4 col-form-label">Enter Last Name: </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lname"
                                    value={this.state.lname}
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="certificateId" className="col-sm-4 col-form-label">Certificate ID: </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="certificateId"
                                    value={this.state.certificateId}
                                    onChange={this.handleChange}
                                    placeholder="e.g. 12ac-df4g-gh7t"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="courseName" className="col-sm-4 col-form-label">Course Name: </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="courseName"
                                    value={this.state.courseName}
                                    onChange={this.handleChange}
                                    placeholder="e.g. Computer Security"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="issuingAuthority" className="col-sm-4 col-form-label">Issuing Authority: </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="issuingAuthority"
                                    value={this.state.issuingAuthority}
                                    onChange={this.handleChange}
                                    placeholder="e.g. Offensive Security"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="issueDate" className="col-sm-4 col-form-label">Issue Date: </label>
                            <div className="col-sm-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="issueDate"
                                    value={this.state.issueDate}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        {/* <div className="form-group row">
                            <label htmlFor="receiveraddress" className="col-sm-4 col-form-label">Receiver's Address: </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="receiveraddress"
                                    value={this.state.receiverAddress}
                                    onChange={this.state.receiverAddress}
                                    placeholder="e.g.: 0xsdhijhojso"
                                />
                            </div>
                        </div> */}
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit Certificate</button>
                    </form>
                    </Container>
                    <div>
                        {this.state.isReceiptGenerated ?
                            <div className="receipt">
                                <h1 className="table-title">Transaction Receipt</h1>
                                <table className="border-blue-900 border-4">
                                    <tbody>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">Transaction Hash </td>
                                            <td>{this.state.receipt.transactionHash}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">Block Hash </td>
                                            <td>{this.state.receipt.blockHash}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">Block Number </td>
                                            <td>{this.state.receipt.blockNumber}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">From Account</td>
                                            <td>{this.state.receipt.from}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">To Account</td>
                                            <td>{this.state.receipt.to}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">Gas Used</td>
                                            <td>{this.state.receipt.gasUsed}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                             : null}
                    </div>
                </div>
            );
        }
    };
};

export default AddCertificate;