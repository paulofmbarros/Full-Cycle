import EventInterface from "../../@shared/event/event.interface";
import { Customer } from "../../customer/entity/customer";

export default class CustomerAddressChangedEvent implements EventInterface {
    dateTimeOccurred: Date;
    eventData: Customer;
    constructor(eventData: Customer) {
        this.dateTimeOccurred = new Date();
        this.eventData = eventData;
    }
}