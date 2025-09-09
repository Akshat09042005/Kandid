import Campaign from "../components/dashboard/campaign"
import Linkedinacc from "../components/dashboard/linkedinacc"
import Activity from "../components/dashboard/activity"

export default function Dashboard(){
    return(
        <>
<div className="flex flex-row gap-4 min-h-screen px-8 w-full">

  <div className="flex flex-col gap-4 flex-1">
    <Campaign />
    <Linkedinacc />
  </div>

  <div className="flex-1">
    <Activity />
  </div>
</div>
        </>
    )
}