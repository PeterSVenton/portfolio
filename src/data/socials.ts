import { Mail, type LucideIcon } from 'lucide-react'
import { CustomIcon, Github, Linkedin } from '@/components/svgs'

export type SocialMeta = {
    href: string,
    Icon: LucideIcon | CustomIcon
}

export const Socials: Record<string, SocialMeta> = {
    Linkedin: {
        href: "https://www.linkedin.com/in/peter-venton-082bb3230/",
        Icon: Linkedin
    },
        Github: {
        href: "https://github.com/PeterSVenton",
        Icon: Github
    },
        Email: {
        href: "mailto:peterstevenventon@gmail.com",
        Icon: Mail
    }
}

export type SocialKey = keyof typeof Socials

export const SocialOrder: readonly SocialKey[] = ['Linkedin', 'Github', 'Email'] as const
