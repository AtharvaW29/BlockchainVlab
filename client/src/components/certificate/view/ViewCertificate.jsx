import React, { Component } from 'react';

import web3 from '../../../getWeb3';
import CertificateContract from '../../../contracts/Certificate.json';
import FailedBlockchain from '../../other/error/failed/Failed';

// import CertificateContract from '../../../contracts/Contract.json';
import './ViewCertificate.css';
import PersistentDrawerLeft from '../../other/drawer/Drawer';
import Footer from '../../other/navbar/Footer';

const pages = [
    { id: 1, name: 'Aim', path: '/Expt1' },
    { id: 2, name: 'Theory', path: '/Theory' },
    { id: 3, name: 'Procedure', path: '/Procedure' },
    { id: 4, name: 'Simulation', path: '/Simulation' },
    { id: 5, name: 'Observation', path: '/Observation' },
    { id: 6, name: 'Feedback', path: '' }
  ];
class ViewCertificate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            certificateId: '',
            web3: null,
            contract: null,
            account: null,
            fname: '',
            lname: '',
            courseName: '',
            issuingAuthority: '',
            issueDate: '',
            fullName: '',
            isFetched: false,
            isConnected: false,
        }

        this.loadBlockchain = this.loadBlockchain.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.loadBlockchain();
    }

    async loadBlockchain() {
        console.log('web3 provider ::::', await web3.givenProvider);
        const givenProvider = await web3.givenProvider;

        if(givenProvider !== null) {
            this.setState({
                isConnected: true,
            });
        }

        if(this.state.isConnected) {
            const accounts = await web3.eth.getAccounts();
            console.log('accounts :-', accounts);

            // const networkId = await web3.eth.net.getId();
            // const deployedNetwork = CertificateContract.networks[networkId];
            // const instance = new web3.eth.Contract(
            //     CertificateContract.abi,
            //     deployedNetwork && deployedNetwork.address,
            // );

            const instance = new web3.eth.Contract(
                CertificateContract.abi,
                '0xD84A684B6E70F225a51491e485Aa4f3EDD76a722',
            );

            this.setState({
                web3,
                account: accounts[0],
                contract: instance
            });
        }
    }

    handleChange(event) {
        this.setState({
            certificateId: event.target.value,
        });
    }

    async handleSubmit(event) {
        event.preventDefault();

        const getCertificateParams = {
            account: this.state.account,
            id: this.state.certificateId,
        };

        const contract = this.state.contract;

        const certificateDetailsResponse = await contract.methods.getCertificate(
            getCertificateParams.account,
            getCertificateParams.id,
        ).call();

        if(certificateDetailsResponse !== undefined) {
            this.setState({
                isFetched: true,
            });
        }else{
            console.log("Please Enter a Valid Certificate ID")
        }
        // console.log(certificateDetailsResponse)
        this.setCertificateDetails(certificateDetailsResponse);
    }

    setCertificateDetails(certificateDetails) {
        const date = new Date(Number(certificateDetails[3])).toDateString()

        this.setState({
            fullName: certificateDetails[0],
            issuingAuthority: certificateDetails[1],
            courseName: certificateDetails[2],
            issueDate: date,
        });
    }

    render () {
        if(!this.state.isConnected) {
            return (
                <FailedBlockchain error="Please check your Metamask is working and you are logged in !" />
            );
        } else {
            return (
<div className="flex flex-col justify-between items-center min-h-screen">
    <div className='flex flex-col justify-center items-center'>
        <PersistentDrawerLeft pages={pages}/>
        <div className="w-fit">
            <dl className="dl-horizontal row max-w-fit border-4 border-blue-900">
                <dd>Ethereum Account Address: </dd>
                <dd>{this.state.account}</dd>
            </dl>
        </div>
        <form className="form w-full">
            <div className="form-group row w-full">
                <label className="col-sm-4">Enter Certificate ID: </label>
                <input
                    type="text"
                    className="form-control col-sm-6"
                    name="certificateId"
                    value={this.state.certificateId}
                    onChange={this.handleChange} />
            </div>
        </form>
        <div>
            <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}>
                    Get Certificate
            </button>
        </div>
        <div className="certificate-details">
            {this.state.isFetched ?
                <div className="">
                    <h2 className="title">Certificate Details</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td className="border-blue-900 border-4">Full Name: </td>
                                <td className="border-blue-900 border-4">{this.state.fullName}</td>
                            </tr>
                            <tr>
                                <td className="border-blue-900 border-4">Certificate ID: </td>
                                <td className="border-blue-900 border-4">{this.state.certificateId}</td>
                            </tr>
                            <tr>
                                <td className="border-blue-900 border-4">Course Name: </td>
                                <td className="border-blue-900 border-4">{this.state.courseName}</td>
                            </tr>
                            <tr>
                                <td className="border-blue-900 border-4">Issuing Authority: </td>
                                <td className="border-blue-900 border-4">{this.state.issuingAuthority}</td>
                            </tr>
                            <tr>
                                <td className="border-blue-900 border-4">Issue Date: </td>
                                <td className="border-blue-900 border-4">{this.state.issueDate}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="extra-spacing-div"></div>
                </div>
                : null}
        </div>
    </div>
    <div className='w-full'>
    <Footer/>
    </div>
</div>
            );
        }
    };
};

export default ViewCertificate;
