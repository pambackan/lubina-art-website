import { notFound } from 'next/navigation';
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){const {locale}=await params;if(!['en','de'].includes(locale))notFound();return <div lang={locale}>{children}</div>}
