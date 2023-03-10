export const themeColors = {
    darkTheme: {
        'primary': "#661AE6",
        'secondary': "#D926AA",
        'accent': "#1FB2A5",
        'neutral': "#191D24",
        'background': "#2A303C",
        'info': "#3ABFF8",
        'success': "#36D399",
        'warning': "#FBBD23",
        'error': "#F87272",
        'color': "#A6DBB",
    },
    lightTheme: {
        'background': "#FFFFFF",
        'grey': "#F2F2F2",
        'color': "#000000",
    }
}

export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark' ? 
            { 
                primary: {
                    ...themeColors.darkTheme,
                    main: themeColors.darkTheme['color'],
                    light: themeColors.darkTheme['color'],
                },
                secondary: {
                    ...themeColors.lightTheme,
                    main: themeColors.lightTheme['color'],
                },
                neutral: {
                    ...themeColors.darkTheme,
                    main: themeColors.darkTheme['neutral'],
                },
                background: {
                    default: themeColors.darkTheme['background'],  
                    alt: themeColors.darkTheme['neutral'],
                },
            } : {
                primary: {
                    ...themeColors.lightTheme,
                    main: themeColors.lightTheme['color'],
                    light: themeColors.lightTheme['color'],
                },
                secondary: {
                    ...themeColors.darkTheme,
                    main: themeColors.darkTheme['secondary'],
                    light: themeColors.darkTheme['secondary'],
                },
                neutral: {
                    ...themeColors.darkTheme,
                    main: themeColors.darkTheme['neutral'],
                },
                background: {
                    default: themeColors.lightTheme['background'],
                    alt: themeColors.darkTheme['background'],
                }
            }),
        },
    };
};