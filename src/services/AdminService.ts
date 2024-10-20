import { CourierDetails } from "../components/ListRecords";

const ADMIN_KEY = "admin-service";

class AdminService {
    add(details: CourierDetails) {
        const stringifiedRecords = localStorage.getItem(ADMIN_KEY);
        const records = stringifiedRecords ? JSON.parse(stringifiedRecords) : [];
        records.push(details)

        localStorage.setItem(ADMIN_KEY, JSON.stringify(records));
    }

    put(details: CourierDetails) {
        const stringifiedRecords = localStorage.getItem(ADMIN_KEY);
        const records: CourierDetails[] = stringifiedRecords ? JSON.parse(stringifiedRecords) : [];
        records.forEach(element => {
            if (element.id === details.id) {
                element = details;
            }
        });

        localStorage.setItem(ADMIN_KEY, JSON.stringify(records));
    }

    get() {
        const stringifiedRecords = localStorage.getItem(ADMIN_KEY);

        const records = stringifiedRecords ? JSON.parse(stringifiedRecords) : [];
        return records;
    }

    getByConsignmentNo(consignmentNo: string) {
        const stringifiedRecords = localStorage.getItem(ADMIN_KEY);

        const records: CourierDetails[] = stringifiedRecords ? JSON.parse(stringifiedRecords) : [];
        return records.find(item => item.consignmentNo === consignmentNo);
    }

    delete(id: string) {
        const stringifiedRecords = localStorage.getItem(ADMIN_KEY);
        const records: CourierDetails[] = stringifiedRecords ? JSON.parse(stringifiedRecords) : [];
        const allRecords = records.filter(element => element.id !== id);

        localStorage.setItem(ADMIN_KEY, JSON.stringify(allRecords));
    }
}

const adminService = new AdminService();

export { adminService };