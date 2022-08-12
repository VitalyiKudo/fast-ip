/* eslint-disable max-statements-per-line */
export const setCookie = (name: string, value: string) => {
    document.cookie = `${name}=${value}`;
};

export const getCookie = (name: string) => {
    return document.cookie.split('; ').find((row) => row.startsWith(name))
        ?.replace(name + '=', '');
};

export const clearCookie = () => {
    return document.cookie.split('; ').forEach(function(c) { document.cookie = c.replace(/^ +/, '').replace(/[=].*/, '=;expires=' + new Date().toUTCString() + ';path=/'); });
};
