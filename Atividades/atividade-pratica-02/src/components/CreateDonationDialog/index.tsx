import { useState } from "react";

import { Autocomplete, Box, Button, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, Stack, TextField } from "@mui/material";
import { CollectionLocation, Person } from "../../schemas/models";
import { donationService } from "../../services/donationService";
import { Close } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";

interface ICreateDonationDialogProps {
    open: boolean,
    setOpen(state: boolean): void,
    getDonations: () => void,
    collectionLocations: CollectionLocation[],
    persons: Person[],
    personId?: number
}

export default function CreateDonationDialog({ collectionLocations, getDonations, open, persons, setOpen, personId }: ICreateDonationDialogProps) {

    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const date = new Date(String(data.get('date')))
        const personId = persons.find((person) => person.name === String(data.get('personId')))?.id || 0
        const localId = collectionLocations.find((collectionLocation) => collectionLocation.name === String(data.get('localId')))?.id || 0

        setLoading(true)

        donationService.postDonation({ date, localId, personId }).then(() => {
            toast.success(`Doação cadastrada com sucesso!`)
            setOpen(false)
        }).catch(err => {
            toast.error(`${err.message}}`)
        }).finally(() => {
            getDonations()
            setLoading(false)
        })
    }

    return (
        <Dialog
            TransitionProps={{ unmountOnExit: true }}
            open={open}
            scroll="body"
            maxWidth='md'
            fullWidth
        >
            <Box
                component='form'
                onSubmit={handleSubmit}
            >
                <DialogTitle>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>Cadastrar Doação</Grid>
                        <Grid item>
                            <IconButton sx={{ size: 'small' }} onClick={() => setOpen(false)}>
                                <Close />
                            </IconButton>
                        </Grid>
                    </Grid>
                </DialogTitle>
                <Divider />

                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Autocomplete
                                disablePortal
                                id="stateId"
                                options={persons}
                                defaultValue={persons.find((person) => person.id === personId)}
                                fullWidth
                                getOptionLabel={(option) => option.name}
                                renderInput={(params) => <TextField {...params} id="personId" fullWidth name="personId" required label="Doador" />}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Autocomplete
                                disablePortal
                                id="stateId"
                                options={collectionLocations}
                                fullWidth
                                getOptionLabel={(option) => option.name}
                                renderInput={(params) => <TextField {...params} id="localId" fullWidth name="localId" required label="Local De Coleta" />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="date"
                                fullWidth
                                required
                                name="date"
                                label='Data da Coleta'
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>

                <Divider />
                <Box sx={{ width: "100%" }}>
                    <Stack spacing={2} sx={{ alignItems: "center", justifyContent: 'space-between', margin: '2vh' }} direction="row">
                        <Button variant="contained" component="label" color="error" onClick={() => setOpen(false)} >Fechar</Button>
                        <LoadingButton loading={loading} variant="contained" color="primary" type='submit' >Cadastrar</LoadingButton>
                    </Stack>
                </Box>
            </Box>
        </Dialog >
    )
}