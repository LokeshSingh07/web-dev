import { AiFillThunderbolt } from "react-icons/ai";
import RenderSteps from "./RenderSteps";



export default function AddCourse(){
    return (
        <>
            <div className="flex flex-row w-full items-start gap-x-5 text-richblack-5">
                <div className="flex flex-1 flex-col">
                    <h1 className="text-3xl mb-14">Add Course</h1>
                    <div className="flex-1">
                        <RenderSteps/>
                    </div>
                </div>
                
                <div className="sticky top-10 hidden xl:block max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 h-fit bg-richblack-800 p-6">
                    <p className="flex items-center gap-x-2 text-xl font-semibold mb-8">
                        <AiFillThunderbolt className="text-yellow-50"/>
                        Course Upload Tips
                    </p>
                    <ul className="ml-5 list-item list-disc text-[12px] space-y-4">
                        <li>Set the Course Price option or make it free.</li>
                        <li>Standard size for the course thumbnail is 1024x576.</li>
                        <li>Video section controls the course overview video.</li>
                        <li>Course Builder is where you create & organize a course.</li>
                        <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
                        <li>Information from the Additional Data section shows up on the course single page.</li>
                        <li>Make Announcements to notify any important</li>
                        <li>Notes to all enrolled students at once.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}