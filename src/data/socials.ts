import { Mail, Github, Linkedin, type LucideIcon } from 'lucide-react'


export type SocialMeta = {
    href: string,
    lucideIcon: LucideIcon
}




export const Socials: Record<string, SocialMeta> = {
    Linkedin: {
        href: "https://www.linkedin.com/in/peter-venton-082bb3230/",
        lucideIcon: Linkedin
    },
        Github: {
        href: "https://github.com/PeterSVenton",
        lucideIcon: Github
    },
        Email: {
        href: "mailto:peterstevenventon@gmail.com",
        lucideIcon: Mail
    }
}

export type SocialKey = keyof typeof Socials

export const SocialOrder: readonly SocialKey[] = ['Linkedin', 'Github', 'Email'] as const
