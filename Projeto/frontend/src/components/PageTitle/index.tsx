import Typography from '@mui/material/Typography';

import { Box } from '@mui/material';

interface IPageTitleProps {
    text: string
}

export default function PageTitle({ text }: IPageTitleProps) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" width='100%'>
            <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '1.5rem', marginTop: '1.5rem' }}>
                {text}
            </Typography>
        </Box>
    );
};