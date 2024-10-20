import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CourierDetails, ListRecords } from "./ListRecords";
import { adminService } from "../services/AdminService";

export const DEFAULT_DETAILS: CourierDetails = {
  consignmentNo: "",
  fromAddress: "",
  destinationAddress: "",
  currentStatus: ""
}

export const Admin = () => {
  const [details, setDetails] = useState(DEFAULT_DETAILS)

  const handleChange = (e: any) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });
  }

  const resetDetails = () => {
    setDetails(DEFAULT_DETAILS);
  }

  const handleAddDetails = () => {
    if (details.id) {
      adminService.put(details);
    } else {
      details.id = uuidv4();
      adminService.add(details);
    }
    resetDetails();
  }


  const handleEditDetails = (consignmentNo: string) => {
    const allRecords: CourierDetails[] = adminService.get();
    const details: CourierDetails = allRecords?.find(item => item.consignmentNo === consignmentNo) || DEFAULT_DETAILS;

    setDetails(details);
  }

  const handleDeleteDetails = (id: string) => { 
    adminService.delete(id);
  }

  const { consignmentNo, fromAddress, destinationAddress, currentStatus } = details;

  return (

    <div>
      <div>
        <div className="flex">
          <div className="w-1/2">
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Consignment No.</label>
            <input name="consignmentNo" value={consignmentNo} onChange={handleChange} type="text" className="ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className="ml-4 w-1/2">
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">From Address</label>
            <textarea name="fromAddress" value={fromAddress} onChange={handleChange} rows={2} cols={70} className="ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
          </div>
        </div>

        <div className="flex mt-2">
          <div className="w-1/2">
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Destination Address</label>
            <textarea name="destinationAddress" value={destinationAddress} onChange={handleChange} rows={2} cols={70} className="ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
          </div>

          <div className="ml-4 w-1/2">
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Status</label>
            <textarea name="currentStatus" value={currentStatus} onChange={handleChange} rows={2} cols={70} className="ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
          </div>

        </div>

        <div className="flex mt-6 mb-6 justify-center">
          <button onClick={resetDetails} className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Clear</button>
          <button onClick={handleAddDetails} className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
        </div>
      </div>

      <ListRecords editDetails={handleEditDetails} deleteDetails={handleDeleteDetails}></ListRecords>
    </div>
  );
}

