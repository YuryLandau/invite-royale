
import Image from "next/image";
import logo from '../../../../public/assets/logo.svg';
import InviteLinkInput from "./InviteLinkInput";
import RankingContainer from "./Ranking";
import Stats from "./Stats";

interface InvitePageProps {
    params: Promise<{
        subscriberdId: string
    }>
}

const InvitePage = async (props: InvitePageProps) => {
    const { subscriberdId } = await props.params

    const inviteLink = `http://localhost:3333/invites/${subscriberdId}`

    return (
        <div className="min-h-dvh flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="flex flex-col gap-10 w-full max-w-[550px]">

                <Image src={logo} alt="Invite Royale Logo" width={108.8} height={30} />

                <div className="space-y-2">
                    <h1 className="text-4xl leading-none font-heading font-semibold text-gray-100">
                        Inscrição confirmada!
                    </h1>
                    <p className="text-gray-300">
                        Para entrar no evento, acesse o link enviado para o seu e-mail.
                    </p>

                </div>

                <div className="space-y-6">
                    <div className="space-y-3">
                        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                            Indique e ganhe
                        </h2>

                        <p className="text-gray-300">
                            Convide mais pessoas para o evento e concorra a prêmios exclusivos! É só compartilhar o link abaixo e acompanhar as inscrições:
                        </p>
                    </div>

                    <InviteLinkInput inviteLink={inviteLink} />

                    <Stats subscriberdId={subscriberdId} />
                </div>
            </div>

            <RankingContainer />
        </div>
    )
}

export default InvitePage