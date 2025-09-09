import { DropdownMenu, 
     DropdownMenuTrigger,
      DropdownMenuContent,
         DropdownMenuItem } 
         from "@radix-ui/react-dropdown-menu"

         import {ChevronDown} from 'lucide-react'

export default function Campaign(){
    return(
        <>
        <div className="flex flex-col w-full gap-8 bg-neutral-100 p-8 border  border-stone-200 shadow-sm rounded-lg">

            <div className="flex flex-row justify-between w-full items-center">

                <div className="font-primary font-medium text-xl">
                    Campaign
                </div>

                <div>
  <DropdownMenu>
    <DropdownMenuTrigger className="px-4 py-2 font-primary text-sm text-zinc-500 font-medium border border-stone-300 rounded-md focus:outline-none">
      All Campaigns <ChevronDown className="inline"/>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      className="w-56 bg-white rounded-lg shadow-lg border border-gray-200 p-2"
    >
      <DropdownMenuItem className="px-2 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
        Recent Campaigns
      </DropdownMenuItem>
      <DropdownMenuItem className="px-2 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
        Last Year
      </DropdownMenuItem>
      <DropdownMenuItem className="px-2 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
        Last Month
      </DropdownMenuItem>
      <DropdownMenuItem className="px-2 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
        Last Week
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>
            </div>


        <div className="flex flex-col gap-3">

            <div className="flex pb-5 border-b-5 border-stone-300 flex-col w-full">

                <div className="flex  flex-row justify-between ">
                    <div className="font-primary font-medium text-lg">
                        Just Herbs
                    </div>
                    <div className="text-green-800 font-medium bg-green-200 px-3 py-2 font-primary text-sm rounded-md">
                        Active
                    </div>
                </div>

            </div>

            <div className="flex pb-5 border-b-5 border-stone-300 flex-col w-full">

                <div className="flex  flex-row justify-between ">
                    <div className="font-primary font-medium text-lg">
                        Just Herbs
                    </div>
                    <div className="text-green-800 font-medium bg-green-200 px-3 py-2 font-primary text-sm rounded-md">
                        Active
                    </div>
                </div>

            </div>

            <div className="flex pb-5 border-b-5 border-stone-300 flex-col w-full">

                <div className="flex  flex-row justify-between ">
                    <div className="font-primary font-medium text-lg">
                        Just Herbs
                    </div>
                    <div className="text-green-800 font-medium bg-green-200 px-3 py-2 font-primary text-sm rounded-md">
                        Active
                    </div>
                </div>

            </div>

            <div className="flex pb-5 border-b-5 border-stone-300 flex-col w-full">

                <div className="flex  flex-row justify-between ">
                    <div className="font-primary font-medium text-lg">
                        Just Herbs
                    </div>
                    <div className="text-green-800 font-medium bg-green-200 px-3 py-2 font-primary text-sm rounded-md">
                        Active
                    </div>
                </div>

            </div>

            <div className="flex pb-5 border-b-5 border-stone-300 flex-col w-full">

                <div className="flex  flex-row justify-between ">
                    <div className="font-primary font-medium text-lg">
                        Just Herbs
                    </div>
                    <div className="text-green-800 font-medium bg-green-200 px-3 py-2 font-primary text-sm rounded-md">
                        Active
                    </div>
                </div>

            </div>
            
        </div>

        </div>
        </>
    )
}