import React from "react";
import { useTranslation } from "react-i18next";

const SoftPlaceholder = () => {
  const { t } = useTranslation();
  return (
    <div className="soft__placeholder__container">
          {t('soft.desc')}
    </div>
  );
};

export default SoftPlaceholder;
