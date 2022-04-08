import { LightningElement, track } from 'lwc';

export default class MultiorgRelatedList extends LightningElement {
    @track data = [
        {
            id: 2662,
            Subject: "New Card Requested",
            Status: "New",
            LOB: "Cards",
        },
        {
            id: 2032,
            Subject: "Mobile Payment Transaction Failed",
            Status: "Working",
            LOB: "Retail"
        },
        {
            id: 1910,
            Subject: "Change in mortgage schedule",
            Status: "Overdue",
            LOB: "Mortgage"
        },
        {
            id: 2170,
            Subject: "Change Card PIN",
            Status: "Working",
            LOB: "Cards",
        },
        {
            id: 2504,
            Subject: "Overdraft Protection",
            Status: "Working",
            LOB: "Retail"
        },
        {
            id: 1933,
            Subject: "Payment dispute",
            Status: "Working",
            LOB: "Retail"
        },
    ]

    columns = [
        { label: 'Number', fieldName: 'id', },
        { label: 'Subject', fieldName: 'Subject' },
        { label: 'Status', fieldName: 'Status' },
        { label: 'Line of Business', fieldName: 'LOB' },
        {
            type: 'action', typeAttributes:
            {
                rowActions: [{ label: 'Escalate', name: 'escalate' }, { label: 'Contact case handler', name: 'contact' }],
                menuAlignment: 'auto'
            }
        }
    ]

    handleRowAction(event) {
        const action = event.detail.action;
        const row = event.detail.row;
        switch (action.name) {
            case 'escalate':
                break;
            case 'contact':
                alert('Case handler is: Toni Melisma, toni.melisma@salesforce.com, 415-215-0790');
                break;
        }
    }
}