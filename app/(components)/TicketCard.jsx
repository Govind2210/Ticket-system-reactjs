import DeleteBlocks from "./DeleteBlocks"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import Statusisplay from "./Statusisplay"

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
        <div className="flex mb-3">
            <PriorityDisplay />
                <div className="ml-auto">
                    <DeleteBlocks/>
                </div>
        </div>
        <h4>Ticket Title</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">this is the ticket description</p>
          <div className="flex-grow"></div> 
          <div className="flex mt-2" >
            <div className="flex flex-col">
                <p className="text-xs my-1">03/12/23 12:21PM</p>
            <ProgressDisplay />
            </div>
            <div className="ml-auto flex item-end">
            <Statusisplay/>
            </div>
            </div> 
    </div>
  )
}

export default TicketCard