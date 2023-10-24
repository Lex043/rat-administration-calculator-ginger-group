import { useState } from "react";

const App = () => {
    const [number, setNumber] = useState("");
    const [kilogram, setKilogram] = useState("");
    const [doseMg, setDoseMg] = useState("");
    const [doseMl, setDoseMl] = useState("");

    // ginger
    const [gDoseMg, setGDoseMg] = useState("");
    const [gDoseMl, setGDoseMl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let kg = number / 1000; // convert gram to kilogram

        // Triclosan
        let dosepermg = Number(kg * 4.3).toFixed(4);
        let doseperml = Number(dosepermg / 2.5).toFixed(2);
        setKilogram(kg);
        setDoseMg(dosepermg);
        setDoseMl(doseperml);

        // Ginger
        let gdosepermg = Number(kg * 500).toFixed(1);
        let gdoseperml = Number(gdosepermg / 100).toFixed(2);
        setGDoseMg(gdosepermg);
        setGDoseMl(gdoseperml);

        // DMSO will be using the same formula with triclosan
    };

    return (
        <main className="bg-[#150e28] min-h-screen text-white py-10 px-4 md:px-10">
            <section className="lg:w-[40%] lg:mx-auto">
                <header className="font-sans text-center">
                    <h1 className="font-bold">
                        DOSAGE CALCULATION FOR RAT ADMINISTRATION
                    </h1>
                    <p className="py-2 text-sm">
                        For Triclosan, Ginger and DMSO
                    </p>
                    <p className="text-sm">Dr. Alamu&apos;s Project Group</p>
                </header>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center gap-4 mt-6"
                >
                    <input
                        type="number"
                        required
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Enter your rat weight in gram"
                        className="bg-transparent border-[1px] text-white outline-none rounded-md pl-2 py-2 w-full"
                    />

                    <button
                        className="w-[120px] rounded-md bg-gradient-to-r from-[#d434fe] via-[#d434fe] to-[#903aff]
                 py-3 font-montserrat text-sm text-white mx-auto"
                    >
                        Generate
                    </button>
                </form>

                <section className="flex flex-col gap-6 mt-4">
                    <div>
                        <h1 className="font-mono font-semibold text-center underline uppercase">
                            Triclosan
                        </h1>
                        <h1>Wt/kg = {kilogram}</h1>
                        <h1>Cal of Dose/mg = {doseMg}</h1>
                        <h1>Cal of Dose/ml = {doseMl}</h1>
                    </div>

                    <div>
                        <h1 className="font-mono font-semibold text-center underline uppercase">
                            Ginger
                        </h1>
                        <h1>Wt/kg = {kilogram}</h1>
                        <h1>Cal of Dose/mg = {gDoseMg}</h1>
                        <h1>Cal of Dose/ml = {gDoseMl}</h1>
                    </div>

                    <div>
                        <h1 className="font-mono font-semibold text-center underline uppercase">
                            DMSO
                        </h1>
                        <h1>Wt/kg = {kilogram}</h1>
                        <h1>Cal of Dose/mg = {doseMg}</h1>
                        <h1>Cal of Dose/ml = {doseMl}</h1>
                    </div>
                </section>
            </section>
        </main>
    );
};

export default App;
