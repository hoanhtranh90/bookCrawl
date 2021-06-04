export const config = {
  baseUrl: 'https://office.adfilex.vn/business-service/',
  sso: {
    url: 'https://office.adfilex.vn/sso',
    clientId: 'VPDT_PRODUCTION',
    clientPass: 'vpdt@16)$',
  },
  version: {
    ios: 2020111800,
    android: 2020111800,
  },
};

// export const config = {
//   baseUrl: 'http://192.168.1.239:9084/business-service/',
//   sso: {
//     url: 'http://192.168.1.239:8080/sso',
//     clientId: 'VPDT_PRODUCTION',
//     clientPass: 'vpdt@16)$',
//   },
//   version: {
//     ios: 2020111800,
//     android: 2020111800,
//   },
// };
// export const config = {
//   baseUrl: 'https://eoffice.mobifone.vn/BusinessService/',
//   sso: {
//     url: 'https://eoffice.mobifone.vn/sso',
//     clientId: 'WEB-EOFFICE-PRODUCTION',
//     clientPass: 'gZnlUWbOK0bTGAnsXNrpXanHzyUK6i1j',
//   },
//   version: {
//     ios: 2021012900,
//     android: 2021012900,
//   },
// };

// export const config = {
//   baseUrl: 'http://10.224.2.97/business-service/',
//   sso: {
//     url: 'http://10.224.2.97/sso',
//     clientId: 'VPDT_PRODUCTION',
//     clientPass: 'vpdt@16)$',
//   },
//   version: {
//     ios: 2020111800,
//     android: 2020111800,
//   },
// };
export const SERVER_API_URL = config.baseUrl;
export const FILE_UPLOAD_MAX_SIZE = 5;

export const AUTHORITIES = {
  ADMIN: 'ROLE_ADMIN',
  USER: 'ROLE_USER',
};

export const SEARCH_OPTION = {
  OR: '1',
  AND: '2',
  WORD: '3',
};

export const messages = {
  DATA_ERROR_ALERT: 'Internal Error',
};

export const COMMENT_TYPE = {
  VB_DI: 0,
  VB_DEN: 1,
};

export const APP_DATE_FORMAT = 'DD/MM/YY HH:mm';
export const APP_TIMESTAMP_FORMAT = 'DD/MM/YY HH:mm:ss';
export const APP_LOCAL_DATE_FORMAT = 'DD/MM/YYYY';
export const APP_LOCAL_DATETIME_FORMAT = 'YYYY-MM-DDTHH:mm';
export const APP_LOCAL_DATETIME_FORMAT_Z = 'YYYY-MM-DDTHH:mm Z';
export const APP_WHOLE_NUMBER_FORMAT = '0,0';
export const APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT = '0,0.[00]';
