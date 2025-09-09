import { DropdownMenu, 
     DropdownMenuTrigger,
      DropdownMenuContent,
         DropdownMenuItem } 
         from "@radix-ui/react-dropdown-menu"

         import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Progress } from "@radix-ui/react-progress"

import {ChevronDown, CircleCheckBig} from 'lucide-react'

export default function Activity(){
    return(
        <>
        <div className="flex flex-col w-full font-primary gap-8 bg-neutral-100 p-8 border  border-stone-200 shadow-sm rounded-lg">

            <div className="flex flex-row justify-between w-full items-center">

                <div className="font-primary font-medium text-xl">
                    Recent Activity
                </div>

                <div className="z-99">
                <DropdownMenu>
                <DropdownMenuTrigger className="px-4 z-99 py-2 font-primary text-sm text-zinc-500 font-medium border border-stone-300 rounded-md focus:outline-none">
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

             <div>
                <Table className="z-7">
                    <TableHeader>
                        <TableRow>
                        <TableHead className="">Account</TableHead>
                        <TableHead>Campaign</TableHead>
                        <TableHead className="text-">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                        <TableCell className="flex flex-row gap-3 items-center">
                            <div className="px-3 text-zinc-300 py-2 bg-gray-400 rounded-full">
                                PG
                            </div>
                            <div className="flex flex-col">
                                <div className="text-base font-medium">
                                    Pulkit Garg
                                </div>
                                <div className="text-xs text-zinc-400">
                                    1999pulkilgarg@gmail.com
                                </div>

                            </div>
                            </TableCell>
                        <TableCell>
                            <div className="bg-blue-800 px-3 py-1 text-white rounded-md font-medium ">
                               <CircleCheckBig className="inline" size="15"/> Connected
                            </div>
                            </TableCell>
                        <TableCell>
                            <div className="flex flex-row gap-4">

                                <div>
                                    <Progress value={57} />
                                </div>
                                <div>
                                    17/30
                                </div>

                            </div>
                        </TableCell>
                        </TableRow>

                         <TableRow>
                        <TableCell className="flex flex-row gap-3 items-center">
                            <div className="px-3 text-zinc-300 py-2 bg-gray-400 rounded-full">
                                PG
                            </div>
                            <div className="flex flex-col">
                                <div className="text-base font-medium">
                                    Pulkit Garg
                                </div>
                                <div className="text-xs text-zinc-400">
                                    1999pulkilgarg@gmail.com
                                </div>

                            </div>
                            </TableCell>
                        <TableCell>
                            <div className="bg-blue-800 px-3 py-1 text-white rounded-md font-medium ">
                               <CircleCheckBig className="inline" size="15"/> Connected
                            </div>
                            </TableCell>
                        <TableCell>
                            <div className="flex flex-row gap-4">

                                <div>
                                    <Progress value={57} />
                                </div>
                                <div>
                                    17/30
                                </div>

                            </div>
                        </TableCell>
                        </TableRow>

                         <TableRow>
                        <TableCell className="flex flex-row gap-3 items-center">
                            <div className="px-3 text-zinc-300 py-2 bg-gray-400 rounded-full">
                                PG
                            </div>
                            <div className="flex flex-col">
                                <div className="text-base font-medium">
                                    Pulkit Garg
                                </div>
                                <div className="text-xs text-zinc-400">
                                    1999pulkilgarg@gmail.com
                                </div>

                            </div>
                            </TableCell>
                        <TableCell>
                            <div className="bg-blue-800 px-3 py-1 text-white rounded-md font-medium ">
                               <CircleCheckBig className="inline" size="15"/> Connected
                            </div>
                            </TableCell>
                        <TableCell>
                            <div className="flex flex-row gap-4">

                                <div>
                                    <Progress value={57} />
                                </div>
                                <div>
                                    17/30
                                </div>

                            </div>
                        </TableCell>
                        </TableRow>

                         <TableRow>
                        <TableCell className="flex flex-row gap-3 items-center">
                            <div className="px-3 text-zinc-300 py-2 bg-gray-400 rounded-full">
                                PG
                            </div>
                            <div className="flex flex-col">
                                <div className="text-base font-medium">
                                    Pulkit Garg
                                </div>
                                <div className="text-xs text-zinc-400">
                                    1999pulkilgarg@gmail.com
                                </div>

                            </div>
                            </TableCell>
                        <TableCell>
                            <div className="bg-blue-800 px-3 py-1 text-white rounded-md font-medium ">
                               <CircleCheckBig className="inline" size="15"/> Connected
                            </div>
                            </TableCell>
                        <TableCell>
                            <div className="flex flex-row gap-4">

                                <div>
                                    <Progress value={57} />
                                </div>
                                <div>
                                    17/30
                                </div>

                            </div>
                        </TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
            </div>


        </div>

        </>
    )
}