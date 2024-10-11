import React from "react";
import { useTranslation } from "react-i18next";

const StackPlaceholder = () => {
  const { t } = useTranslation();
  return (
    <div className="stack__placeholder__container">
     {t('stack.desc')}
    </div>
  );
};

export default StackPlaceholder;
