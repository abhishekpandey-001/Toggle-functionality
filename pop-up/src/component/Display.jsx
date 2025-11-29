

const Display = ({ setPop, pop2 }) => {
    return (
        <>
            <button className="absolute top-10 right-30" onClick={() => setPop(true)}>❌</button>
            <div className="bg-red-400/65 h-[20rem] w-dvh pt-14 rounded-3xl">
                <h1 className="text-2xl text-white">⚠️ Are you sure you want to {pop2}</h1>
                {pop2 === "delete" ? (
                    <p className="mt-5">The data will be deleted</p>
                ) : (
                    <p className="mt-5">The data will be edited</p>
                )}
                <button className="mr-8 mt-12">Yes</button>
                <button>No</button>
            </div>
        </>
    )
}

export default Display
