import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {CircleCheckBig} from 'lucide-react'
import { Progress } from "@radix-ui/react-progress"

export default function Linkedinacc(){
    return(
        <>
        <div className="flex flex-col w-full font-primary gap-8 bg-neutral-100 p-8 border  border-stone-200 shadow-sm rounded-lg">

            <div className="flex flex-row justify-between w-full items-center">
                <div className="font-primary font-medium text-xl">
                    Linkedin Accounts
                </div>
            </div>

            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="">Account</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-">Requests</TableHead>
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