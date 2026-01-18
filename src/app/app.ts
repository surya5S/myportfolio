import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly highlights = [
    {
      title: 'Track your portfolio items',
      description: 'Keep a living list of projects, assets, and milestones with clear status tags.'
    },
    {
      title: 'Secure login & registration',
      description: 'Preview the authentication experience you want to provide to real users.'
    },
    {
      title: 'Expense & bill management',
      description: 'Monitor monthly spending, upcoming bills, and payment habits in one place.'
    }
  ];

  protected readonly expenses = [
    {
      category: 'Housing',
      amount: '$1,350',
      note: 'Rent + utilities'
    },
    {
      category: 'Transportation',
      amount: '$220',
      note: 'Metro, fuel, parking'
    },
    {
      category: 'Subscriptions',
      amount: '$89',
      note: 'Streaming + software'
    },
    {
      category: 'Groceries',
      amount: '$460',
      note: 'Weekly essentials'
    }
  ];

  protected readonly bills = [
    {
      name: 'Internet',
      due: 'Sep 05',
      amount: '$75',
      status: 'Scheduled'
    },
    {
      name: 'Credit Card',
      due: 'Sep 12',
      amount: '$240',
      status: 'Pending'
    },
    {
      name: 'Car Insurance',
      due: 'Sep 18',
      amount: '$120',
      status: 'Autopay'
    }
  ];
}
