import { 
    CreditCard, PiggyBank, ShoppingCart, TrendingUp, Wallet
 } from "lucide-react";

   const accounts = [
        {
          id: 1,
          name: "Main Savings",
          balance: "$8,459.45",
          type: "savings",
        },
        {
          id: 2,
          name: "Checking Account",
          balance: "$2,850.00",
          type: "checking",
        },
        {
          id: 3,
          name: "Investment Portfolio",
          balance: "$15,230.80",
          type: "investment",
        },
      ]
    
      const transactions = [
        {
          id: 1,
          title: "Apple Store Purchase",
          amount: "-$999.00",
          date: "Today, 2:45 PM",
          icon: ShoppingCart,
        },
        {
          id: 2,
          title: "Salary Deposit",
          amount: "+$4,500.00",
          date: "Today, 9:00 AM",
          icon: Wallet,
        },
        {
          id: 3,
          title: "Netflix Subscription",
          amount: "-$15.99",
          date: "Yesterday",
          icon: CreditCard,
        },
      ]
    
      const goals = [
        {
          id: 1,
          title: "Emergency Fund",
          target: "$15,000",
          progress: 65,
          icon: PiggyBank,
          status: "in-progress",
        },
        {
          id: 2,
          title: "Stock Portfolio",
          target: "$50,000",
          progress: 30,
          icon: TrendingUp,
          status: "pending",
        },
        {
          id: 3,
          title: "Debt Repayment",
          target: "$25,000",
          progress: 45,
          icon: CreditCard,
          status: "completed",
        },
    
        
      ]


      export {transactions, accounts, goals};