import {
    Wallet,
    CheckCircle2,
    Timer,
    AlertCircle,
  } from "lucide-react"
import { accounts, goals, transactions } from "../../mock/dashboard"
  function DashBoardItems() {
  
   
      
        const statusIcons = {
          pending: Timer,
          "in-progress": AlertCircle,
          completed: CheckCircle2,
        }
      
        const statusColors = {
          pending: "text-amber-600 dark:text-amber-400",
          "in-progress": "text-blue-600 dark:text-blue-400",
          completed: "text-emerald-600 dark:text-emerald-400",
        }
   
  
      
    return (
      <div>
  
  
             {/* Accounts Section */}
  
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Accounts</h2>
                    <div className="space-y-4">
                      {accounts.map((account) => (
                        <div
                          key={account.id}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1F1F23]"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                              <Wallet className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                            </div>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">{account.name}</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{account.balance}</span>
                        </div>
                      ))}
                    </div>
                  </div>
  
                  {/* Transactions Section */}
  
                  <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recent Transactions</h2>
                    <div className="space-y-4">
                      {transactions.map((transaction) => (
                        <div
                          key={transaction.id}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1F1F23]"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                              <transaction.icon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{transaction.title}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{transaction.date}</div>
                            </div>
                          </div>
                          <span
                            className={`text-sm font-medium ${transaction.amount.startsWith("+") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                          >
                            {transaction.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
               
                {/* Goals Section */}
                <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Financial Goals</h2>
                  <div className="grid gap-6 md:grid-cols-3">
                    {goals.map((goal) => {
                      const StatusIcon = statusIcons[goal.status]
                      return (
                        <div key={goal.id} className="p-4 rounded-lg border border-gray-200 dark:border-[#1F1F23]">
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                              <goal.icon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                            </div>
                            <div
                              className={`flex items-center gap-1 text-xs font-medium ${statusColors[goal.status]}`}
                            >
                              <StatusIcon className="h-4 w-4" />
                              {goal.status}
                            </div>
                          </div>
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">{goal.title}</h3>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-500 dark:text-gray-400">Progress</span>
                              <span className="text-gray-900 dark:text-white">{goal.progress}%</span>
                            </div>
                            <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                              <div
                                className="h-full bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300"
                                style={{ width: `${goal.progress}%` }}
                              />
                            </div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">Target: {goal.target}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
  
  
  
              
  
  
      </div>
    )
  }
  
  export default DashBoardItems