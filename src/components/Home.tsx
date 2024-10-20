import React, { Component } from "react";
import { adminService } from "../services/AdminService";
import { CourierDetails } from "./ListRecords";
import { DEFAULT_DETAILS } from "./Admin";

interface HomeState {
  consignmentNo: string;
  record: CourierDetails,
  noRecordsMessage: string;
}

interface HomeProps { }

class Home extends Component<HomeProps, HomeState> {

  constructor(props: any) {
    super(props);
    this.state = {
      consignmentNo: "",
      noRecordsMessage: "",
      record: DEFAULT_DETAILS
    }
  }

  handleOnChange = (e: any) => {
    this.setState({
      consignmentNo: e.target.value
    });
  }

  showDetails = () => {
    const { consignmentNo } = this.state;
    if (!consignmentNo) {
      return;
    }

    const record: CourierDetails = adminService.getByConsignmentNo(consignmentNo) || DEFAULT_DETAILS;
    if (record.id) {
      this.setState({ record, noRecordsMessage: "" });
    } else {
      this.setState({ noRecordsMessage: `No records found for Consignment No ${consignmentNo}` });
    }

  }

  render() {
    const { noRecordsMessage, consignmentNo, record } = this.state
    return (
      <div>
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Consignment No.</label>
        <input type="text" value={consignmentNo} onChange={this.handleOnChange} className="ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <button type="button" onClick={() => this.showDetails()} className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>

        {record.id &&
          (<table className="w-full table-auto mt-6 text-left border-collapse border border-slate-400">
            <thead>
              <th className="border border-slate-300">Consignment No</th>
              <th className="border border-slate-300">From Addresss</th>
              <th className="border border-slate-300">Destination Address</th>
              <th className="border border-slate-300">Current Status</th>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300">{record.consignmentNo}</td>
                <td className="border border-slate-300">{record.fromAddress}</td>
                <td className="border border-slate-300">{record.destinationAddress}</td>
                <td className="border border-slate-300">{record.currentStatus}</td>
              </tr>
            </tbody>
          </table>)
        }

        {noRecordsMessage.length > 0 && <div>{noRecordsMessage}</div>}
      </div>
    );
  }
}

export default Home;
