import { getRanking } from "@/http/api";
import Image from "next/image";
import cooper from '../../../../public/assets/medal-cooper.svg';
import gold from '../../../../public/assets/medal-gold.svg';
import silver from '../../../../public/assets/medal-silver.svg';

const RankingContainer = async () => {
    const { ranking } = await getRanking()

    return (
        <div className="w-full space-y-5 max-w-[330px] ">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                Ranking de indicações
            </h2>

            <div className="space-y-4">
                {ranking.map((item, index) => {
                    const position = index + 1

                    return (
                        <div key={item.id} className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-between gap-3">
                            <span className="text-sm text-gray-300 leading-none">
                                <span className="font-semibold">{position}°</span> |
                                {item.name}
                            </span>

                            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                                {item.score}
                            </span>

                            {position === 1 && <Image src={gold} alt="" className="absolute -top-1 right-8" />}
                            {position === 2 && <Image src={silver} alt="" className="absolute -top-1 right-8" />}
                            {position === 3 && <Image src={cooper} alt="" className="absolute -top-1 right-8" />}

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RankingContainer