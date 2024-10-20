import React, { Component } from "react";
import { adminService } from "../services/AdminService";


export interface CourierDetails {
  id?: string;
  consignmentNo: string,
  fromAddress: string,
  destinationAddress: string,
  currentStatus: string
}

export const ListRecords = (props: any) => {
  const { editDetails, deleteDetails } = props;
  const details: CourierDetails[] = adminService.get();

  const handleEditDetails = (consignmentNo: string): void => {
    editDetails(consignmentNo);
  }

  const handleDeleteDetails = (item: CourierDetails): void => {
    deleteDetails(item.id);
  }

  // border border-slate-400 rounded-md
  return (
    <table className="rounded-table w-full table-auto mt-6 text-left border-collapse border-slate-400">
      <thead>
        <th>Sr No</th>
        <th>Consignment No</th>
        <th>From Addresss</th>
        <th>Destination Address</th>
        <th>Current Status</th>
        <th>Action</th>
      </thead>
      <tbody>

        {details.map((item, index) =>
        (<tr>
          <td>{index + 1}</td>
          <td>{item.consignmentNo}</td>
          <td>{item.fromAddress}</td>
          <td>{item.destinationAddress}</td>
          <td>{item.currentStatus}</td>
          <td>
            <a className="mr-2 text-blue-600 visited:text-purple-600" href="#" onClick={() => handleEditDetails(item.consignmentNo)}>Edit</a>
            <a className="ml-2 text-blue-600 visited:text-purple-600" href="#" onClick={() => handleDeleteDetails(item)}>Delete</a>
          </td>
        </tr>)
        )}
      </tbody>
    </table>
  );
}
