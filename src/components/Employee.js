import EditEmployee from "./EditEmployee";

function Employee(Props) {
    return (
        <div className="py-8 px-8 max-w-sm mx-20 mt-10 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                            {Props.name}
                        </p>
                        <p className="text-slate-500 font-medium">
                            {Props.role}
                        </p>
                    </div>
                    <EditEmployee />
                </div>
        </div>
    );
}

export default Employee