import { DataTypeCustomers } from "../models/MCustomersTable";
import { DataTypeEmployees } from "../models/MEmployeesTable";

export const dataAboutCustomers: DataTypeCustomers[] = [
    {
        key: '1',
        customerId: 1,
        customer: { image: 'https://i.pinimg.com/236x/0c/34/cd/0c34cdf2af2805b6b54ebf6af73aca6f--minions-love-les.jpg', name: 'Jie Yan', email: 'email@mail.com' },
        projectName: 'Elite Admin',
        status: 'Active',
        weeks: 40,
        budget: '$2.4k',
        location: 'Russia'
    },
    {
        key: '2',
        customerId: 2,
        customer: { image: 'https://i.pinimg.com/236x/0c/34/cd/0c34cdf2af2805b6b54ebf6af73aca6f--minions-love-les.jpg', name: 'Jie Yan', email: 'email@mail.com' },
        projectName: 'Elite Admin',
        status: 'Cancel',
        weeks: 40,
        budget: '$2.4k',
        location: 'USA'
    },
    {
        key: '3',
        customerId: 3,
        customer: { image: 'https://i.pinimg.com/236x/0c/34/cd/0c34cdf2af2805b6b54ebf6af73aca6f--minions-love-les.jpg', name: 'Jie Yan', email: 'email@mail.com' },
        projectName: 'Elite Admin',
        status: 'Completed',
        weeks: 40,
        budget: '$2.4k',
        location: 'UK'
    },
    {
        key: '4',
        customerId: 4,
        customer: { image: 'https://i.pinimg.com/236x/0c/34/cd/0c34cdf2af2805b6b54ebf6af73aca6f--minions-love-les.jpg', name: 'Jie Yan', email: 'email@mail.com' },
        projectName: 'Elite Admin',
        status: 'Pending',
        weeks: 40,
        budget: '$2.4k',
        location: 'Franch'
    },
];

export const dataAboutEmployees: DataTypeEmployees[] = [
    {
        id: 1,
        employee: { url: 'https://www.megabeyin.com/wp-content/uploads/2016/02/Steve-Jobs-1.jpg', employeeName: 'Tomy Shelby' },
        designation: 'Marketing Head',
        country: 'USA',
        hireDate: new Date("2017-10-05").toLocaleDateString(),
        reportsTo: 'Carson',
    },
    {
        id: 2,
        employee: { url: 'https://www.megabeyin.com/wp-content/uploads/2016/02/Steve-Jobs-1.jpg', employeeName: 'Tomy Shelby' },
        designation: 'Marketing Head',
        country: 'USA',
        hireDate: new Date("2017-10-06").toLocaleDateString(),
        reportsTo: 'Carson',
    },
    {
        id: 3,
        employee: { url: 'https://www.megabeyin.com/wp-content/uploads/2016/02/Steve-Jobs-1.jpg', employeeName: 'Tomy Shelby' },
        designation: 'Designer',
        country: 'USA',
        hireDate: new Date("2017-11-07").toLocaleDateString(),
        reportsTo: 'Carson',
    },
    {
        id: 4,
        employee: { url: 'https://www.megabeyin.com/wp-content/uploads/2016/02/Steve-Jobs-1.jpg', employeeName: 'Tomy Shelby' },
        designation: 'Designer',
        country: 'USA',
        hireDate: new Date("2017-09-08").toLocaleDateString(),
        reportsTo: 'Carson',
    },
]