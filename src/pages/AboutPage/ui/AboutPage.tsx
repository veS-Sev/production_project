import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t} = useTranslation('about');
    return (
        <div>{t('О сайте')}
        <div>{t('О сайте123456789')}
        </div>
        </div>
    );
};

export default AboutPage;
