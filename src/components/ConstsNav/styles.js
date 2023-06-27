export const navbarStyles = {
    drawer: {
        width: 180,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 180,
            boxSizing: 'border-box',
            backgroundColor: '#282c34',
            color: '#f1f1f1',
        },
        '& .Mui-selected': {
            color: 'red',
        },
    },
    icons : {
        color: '#f1f1f1',
        marginLeft: '7px',
    },

    text: {
        '& span': {
            marginLeft: '-20px',
            fontWeight: '600',
            fontSize: '14px',
        }
    }
};