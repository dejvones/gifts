export interface IColors {
    bgMain: string,
    bg100: string,
    bg200: string,
    bg300: string,
    bg400: string,
    text: string,
    primary: string,
    secondary: string
}

export const DarkTheme : IColors = {
    bgMain: '#121212',
    bg100: '#282828',
    bg200: '#3f3f3f',
    bg300: '#575757',
    bg400: '#717171',
    text: 'white',
    primary: '#ffab66',
    secondary: '#85a7ff'
}

export const LightTheme : IColors = {
    bgMain: '#ffffff',
    bg100: '#ffeddd',
    bg200: '#ffdbbc',
    bg300: '#ffc99c',
    bg400: '#ffb77b',
    text: 'black',
    primary: '#ff8000',
    secondary: '#007fff'
}