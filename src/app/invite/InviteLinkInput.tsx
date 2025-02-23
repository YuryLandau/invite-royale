'use client'

import { Copy, Link } from "lucide-react";
import { IconButton } from "../components/IconButton";
import { InputIcon, InputRoot, InputTextField } from "../components/Input";

interface InviteLinkInputProps {
    inviteLink: string
}

const InviteLinkInput = ({ inviteLink }: InviteLinkInputProps) => {

    const copyInviteLink = () => {
        navigator.clipboard.writeText(inviteLink)
    }

    return (

        <InputRoot>
            <InputIcon>
                <Link className="size-5" />
            </InputIcon>

            <InputTextField readOnly defaultValue={inviteLink} />

            <IconButton className="-mr-2" onClick={copyInviteLink}>
                <Copy className="size-5" />
            </IconButton>
        </InputRoot>
    )
}

export default InviteLinkInput