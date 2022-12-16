import { Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Loading({ loading }) {
    return (
        <Transition
            show={loading}
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
        >
            <div className="w-screen h-screen absolute z-50 bg-white">
                <div className="absolute left-0 right-0 top-0 bottom-0 m-auto text-center h-12 md:h-14">
                    <img src="/public/load.jpg" className="m-auto h-12 md:h-14 transition-transform animate-spin" alt="Loading..." />
                    <div className="pt-2 animate-pulse">Loading...</div>
                </div>
            </div>
        </Transition>
    )
}