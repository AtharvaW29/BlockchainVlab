import React, { Component } from 'react';
import web3 from '../../../getWeb3';
import CertificateContract from '../../../contracts/Certificate.json';
import FailedBlockchain from '../../other/error/failed/Failed';
import './GetTransactionDetails.css';
import PersistentDrawerLeft from '../../other/drawer/Drawer';
import Footer from '../../other/navbar/Footer';

const etherscanUrl = 'https://etherscan.io/';

const pages = [{ id: 1, name: 'Aim', path: '/Expt2/Aim' },
              { id: 2, name: 'Theory', path: '/Expt2/Theory' },
              { id: 3, name: 'Procedure', path: '/Expt2/Procedure' },
              { id: 4, name: 'Experiment', path: '/Expt2/Experiment' },
              { id: 5, name: 'Feedback', path: '' }];
class GetTransactionDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            transactionHash: '',
            transactionDetails: null,
            isConnected: false,
            isFetched: false,
        }

        this.loadBlockchain = this.loadBlockchain.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setTransactionDetails = this.setTransactionDetails.bind(this);
    }

    componentDidMount() {
        this.loadBlockchain();
    }

    async loadBlockchain() {
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
            console.log('hello', instance)

            this.setState({
                web3,
                account: accounts[0],
                contract: instance
            });
        }
    }

    handleChange(event) {
        this.setState({
            transactionHash: event.target.value,
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const web3 = this.state.web3;

        const transaction = await web3.eth.getTransaction(this.state.transactionHash);
        console.log('Transaction Details :-', transaction);
        this.setTransactionDetails(transaction);
    }

    setTransactionDetails(params) {
        const transactionDetails = {
            blockNumber: params.blockNumber,
            to: params.to,
            from: params.from,
            gas: params.gas,
            gasPrice: params.gasPrice,
            hash: params.hash,
            nonce: params.nonce,
            r: params.r,
            s: params.s,
            v: params.v,
            transactionIndex: params.transactionIndex
        }

        this.setState({
            transactionDetails: transactionDetails,
            isFetched: true,
        })
    }

    render () {
        if(!this.state.isConnected) {
            return <FailedBlockchain error="Please check your Metamask is working and you are logged in !" />
        }
        else {
            return (
                <div className="flex flex-col justify-between items-center min-h-screen">
                    <PersistentDrawerLeft pages={pages} />
                    <div className="account-address w-50">
                        <dl className="dl-horizontal row">
                            <dt className="col-5">Ethereum Account Address: </dt>
                            <dd className="col-7">{this.state.account}</dd>
                        </dl>
                    </div>
                    <div className="form-div">
                        <form className="form">
                            <div className="form-group row">
                                <label htmlFor="transactionHash" className="col-sm-4 col-form-label">Enter Transaction Hash: </label>
                                <div className="col-sm-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="transactionHash"
                                        value={this.state.transactionHash}
                                        onChange={this.handleChange} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={this.handleSubmit}>
                                Get Transaction Details
                        </button>
                    </div>
                    {/* <div className="view-on-etherscan">
                        <a
                            className="btn btn-primary"
                            href={`${etherscanUrl}/${this.state.transactionHash}`}
                            target="_blank"
                            role="button"
                        >
                            View on Etherscan
                        </a>
                    </div> */}
                    <div>
                        {this.state.isFetched ?
                            <div className="transaction-details">
                                <h1 className="table-title">Transaction Details</h1>
                                <table className="border-blue-900 border-4">
                                    <tbody>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">Transaction Hash </td>
                                            <td>{this.state.transactionHash}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">Block Number </td>
                                            <td>{this.state.transactionDetails.blockNumber}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">From Account</td>
                                            <td>{this.state.transactionDetails.from}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">To Account</td>
                                            <td>{this.state.transactionDetails.to}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">Gas Used</td>
                                            <td>{this.state.transactionDetails.gas}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">Gas Price</td>
                                            <td>{this.state.transactionDetails.gasPrice}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">Hash</td>
                                            <td>{this.state.transactionDetails.hash}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">Nonce</td>
                                            <td>{this.state.transactionDetails.nonce}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">R</td>
                                            <td>{this.state.transactionDetails.r}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">S</td>
                                            <td>{this.state.transactionDetails.s}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">V</td>
                                            <td>{this.state.transactionDetails.v}</td>
                                        </tr>
                                        <tr className="border-blue-900 border-4">
                                            <td className="border-blue-900 border-4">Transaction Index</td>
                                            <td>{this.state.transactionDetails.transactionIndex}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                             : null}
                    </div>
                    <div className='w-full'>
                    <Footer/>
                    </div>
                </div>
            );
        }
    }
}

export default GetTransactionDetails;
