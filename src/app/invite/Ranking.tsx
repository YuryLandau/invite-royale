import Image from "next/image";
import React from 'react';
import gold from '../../../public/assets/medal-gold.svg';

const RankingContainer = () => {
    return (
        <div className="w-full space-y-5 max-w-[330px] ">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                Ranking de indicações
            </h2>

            <div className="space-y-4">
                <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-between gap-3">
                    <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">1°</span> |
                        Yury Landau
                    </span>

                    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                        1030
                    </span>

                    <Image src={gold} alt="" className="absolute -top-1 right-8" />
                </div>
            </div>
        </div>
    )
}

export default RankingContainer