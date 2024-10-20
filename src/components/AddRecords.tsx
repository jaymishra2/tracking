import React, { Component } from "react";
import { adminService } from "../services/AdminService";
import { CourierDetails } from "./ListRecords";

interface AdminState {
  details: CourierDetails;
}

const DEFAULT_DETAILS: CourierDetails = {
  consignmentNo: "",
  fromAddress: "",
  destinationAddress: "",
  currentStatus: ""
}

class AddRecords extends Component<{}, AdminState> {
  constructor(props: any) {
    super(props);
    this.state = {
      details: DEFAULT_DETAILS
    }
  }


  handleChange = (e: any) => {
    const { details } = this.state;

    this.setState({
      details: {
        ...details,
        [e.target.name]: e.target.value
      }
    })
  }

  resetDetails = () => {
    this.setState({
      details: DEFAULT_DETAILS
    })
  }

  handleAddDetails = () => {
    const { details } = this.state;
    adminService.add(details);
    this.resetDetails();
  }

  render() {
    return (
      <div>
        <div className="flex">
          <div className="w-1/2">
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Consignment No.</label>
            <input name="consignmentNo" onChange={this.handleChange} type="text" className="ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className="ml-4 w-1/2">
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">From Address</label>
            <textarea name="fromAddress" onChange={this.handleChange} rows={2} cols={70} className="ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
          </div>
        </div>

        <div className="flex mt-2">
          <div className="w-1/2">
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Destination Address</label>
            <textarea name="destinationAddress" onChange={this.handleChange} rows={2} cols={70} className="ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
          </div>

          <div className="ml-4 w-1/2">
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Status</label>
            <textarea name="currentStatus" onChange={this.handleChange} rows={2} cols={70} className="ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
          </div>

        </div>

        <div className="flex mt-6 justify-around">
          <button onClick={this.handleAddDetails} className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
        </div>
      </div>
    );
  }
}

export default AddRecords;
