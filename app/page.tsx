/**
 * Diagnos project
 * @description Root page
 * @author @superbaby81230
 * Created: 15/5/2023
 */

import CheckUp from "@/components/landing/Checkup";
import LandingImg from "@/components/landing/FullImage";
import SignInDialog from "@/components/SignInDialog";
import checkups from '@/resource/CheckUps'

export default function Home() {
  return (
    <>
      <div className="mx-auto">
        <LandingImg />
        <div className="mx-auto max-w-screen-lg grid md:grid-cols-3 sm:grid-cols-2 gap-3 mt-3 px-3">
          {checkups.map((item, index) => (
            <CheckUp checkup={item} key={index} />
          ))}
        </div>
      </div>
      <SignInDialog />
      </>
  );
}
