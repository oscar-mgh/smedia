import { RiHeart3Line } from 'react-icons/ri';
import { RiStackshareLine } from 'react-icons/ri';

export default function page() {
	return (
		<div className="flex space-x-8">
			<div className="h-60 w-[250px] mt-20 rounded-md">
				<div className="bg-zinc-800 h-20"></div>
				<div className="bg-gray-500 h-20"></div>
				<div className="bg-blue-500 h-20"></div>
				<div className="bg-sky-500 h-20"></div>

				<div className="flex justify-between">
					<div className="border-2 cursor-pointer border-gray-300 w-12 mt-2 flex justify-center items-center rounded-md">
						<RiHeart3Line className="w-8 mt-6 h-6 hover:text-red-500 focus:text-red-600" />
					</div>
					<div className="border-2 cursor-pointer border-gray-300 w-12 mt-2 flex justify-center items-center rounded-md">
						<RiStackshareLine className="w-8 mt-6 h-6 hover:text-sky-800 focus:text-sky-900" />
					</div>
				</div>
			</div>
			<div className="h-60 w-[250px] mt-20 rounded-md">
				<div className="bg-gray-400 h-20"></div>
				<div className="bg-sky-800 h-20"></div>
				<div className="bg-blue-900 h-20"></div>
				<div className="bg-sky-800 h-20"></div>

				<div className="flex justify-between">
					<div className="border-2 cursor-pointer border-gray-300 w-12 mt-2 flex justify-center items-center rounded-md">
						<RiHeart3Line className="w-8 mt-6 h-6 hover:text-red-500 focus:text-red-600" />
					</div>
					<div className="border-2 cursor-pointer border-gray-300 w-12 mt-2 flex justify-center items-center rounded-md">
						<RiStackshareLine className="w-8 mt-6 h-6 hover:text-sky-800 focus:text-sky-900" />
					</div>
				</div>
			</div>
			<div className="h-60 w-[250px] mt-20 rounded-md">
				<div className="bg-red-800 h-20"></div>
				<div className="bg-pink-500 h-20"></div>
				<div className="bg-orange-500 h-20"></div>
				<div className="bg-sky-500 h-20"></div>

				<div className="flex justify-between">
					<div className="border-2 cursor-pointer border-gray-300 w-12 mt-2 flex justify-center items-center rounded-md">
						<RiHeart3Line className="w-8 mt-6 h-6 hover:text-red-500 focus:text-red-600" />
					</div>
					<div className="border-2 cursor-pointer border-gray-300 w-12 mt-2 flex justify-center items-center rounded-md">
						<RiStackshareLine className="w-8 mt-6 h-6 hover:text-sky-800 focus:text-sky-900" />
					</div>
				</div>
			</div>
			<div className="h-60 w-[250px] mt-20 rounded-md">
				<div className="bg-purple-800 h-20"></div>
				<div className="bg-cyan-500 h-20"></div>
				<div className="bg-orange-500 h-20"></div>
				<div className="bg-sky-500 h-20"></div>

				<div className="flex justify-between">
					<div className="border-2 cursor-pointer border-gray-300 w-12 mt-2 flex justify-center items-center rounded-md">
						<RiHeart3Line className="w-8 mt-6 h-6 hover:text-red-500 focus:text-red-600" />
					</div>
					<div className="border-2 cursor-pointer border-gray-300 w-12 mt-2 flex justify-center items-center rounded-md">
						<RiStackshareLine className="w-8 mt-6 h-6 hover:text-sky-800 focus:text-sky-900" />
					</div>
				</div>
			</div>
		</div>
	);
}
