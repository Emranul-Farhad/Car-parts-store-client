import React from 'react';




const Summury = () => {

    return (
        <div>
            <div class="stats stats-vertical lg:stats-horizontal shadow">

                <div class="stat place-items-center">
                    <div class="stat-title">Users</div>
                    <div class="stat-value text-[#FC5A34]">15K</div>
                    <div class="stat-desc">Last year</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Revinew</div>
                    <div class="stat-value text-[#FC5A34]">4,20000</div>
                    <div class="stat-desc text-gray">↗︎ 40 (5%)</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title ">New Registers</div>
                    <div class="stat-value text-[#E81938]">2000</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div class="stat-title">Products</div>
                    <div class="stat-value text-[#FC5A34]">3,200</div>
                    <div class="stat-desc">↗︎ 200 </div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div class="stat-title">Total Review</div>
                    <div class="stat-value text-primary">10k </div>
                    <div class="stat-desc">20% more than last month</div>
                </div>


            </div>
        </div>
    );
};

export default Summury;