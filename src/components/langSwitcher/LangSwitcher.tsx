import Select from '@/shared/ui/select/Select';
import {useRouter} from 'next/router';


type LanguageType = {
    [language: string]: string
}

const languages: LanguageType = {
    'Русский': 'ru',
    'English': 'en'
}

export const LangSwitcher = () => {
    const {locale, push, pathname, query, asPath, locales} = useRouter();

    const changeLangHandler = (item: string) => {
        push({pathname, query}, asPath, {locale: languages[item]});
    };

    const items = Object.keys(languages).map(lang => ({title: lang, icon: ''}))
    const curItem = items.filter(item=>languages[item.title]===locale)[0]


    return (
        <Select
            defaultValue={curItem}
            items={items}
            onValueChange={changeLangHandler}
        />
    );
};
