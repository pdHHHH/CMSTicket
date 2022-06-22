export enum ETicketStatus {
    used = "Used",
    available = "Available",
    expired = "Expired", 
}

export interface ITicket {
    ticketPackCode: string, 
    bookingCode: string,
    ticketNo: string,
    status: ETicketStatus,
    usageDate: Date,
    ticketOutDate: Date,
    checkInGate: number,
}

export interface ITicketPack {
    ticketPackCode: string, 
    ticketPackName: string,
    eventName: string,
    startDate: Date,
    endDate: Date,
    ticketPrice: number,
    ticketPackPrice: number,
    isAvailable: boolean
}