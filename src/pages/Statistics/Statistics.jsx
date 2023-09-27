import { Cell, Label, Pie, PieChart } from "recharts";
const Statistics = () => {
    const donationItem = JSON.parse(localStorage.getItem('donation'))
    console.log(donationItem.length)

    const yourDonation = (donationItem.length / 12) * 100;
    const totalDonation = 100 - yourDonation;
    console.log(yourDonation)
    console.log(totalDonation)
    const data = [
        { name: 'Your Donation', value: yourDonation },
        { name: 'Total Donation', value: totalDonation },
    ];
    const COLORS = ['#00C49F', '#FF444A'];
    return (
        <div>
            <div className="container mx-auto">
                <PieChart className="w-full mx-auto" width={400} height={400}>
                    <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={80}>
                        {
                            data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))
                        }
                        <Label
                            value={`${yourDonation.toFixed(2)}%`}
                            position="insideStart"
                            fontSize={10}
                            fontWeight="bold"
                            fill="#FFF"
                            dy={-20}
                        />
                        <Label
                            value={`${totalDonation.toFixed(2)}%`}
                            position="insideEnd"
                            fontSize={10}
                            fontWeight="bold"
                            fill="#FFF"
                            dy={20}
                        />
                    </Pie>
                </PieChart>
                <div className="w-full mx-auto flex justify-center items-center gap-3">
                    <div className="flex justify-center items-center gap-3">
                        <p>Your Donation</p>
                        <div className="w-10 h-2 bg-[#00C49F]"></div>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <p>Total Donation</p>
                        <div className="w-10 h-2 bg-[#FF444A]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;