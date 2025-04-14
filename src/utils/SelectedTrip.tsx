import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";

const BaseColorRadio = styled(Radio)(({ theme }) => ({
  color: theme.palette.baseColor?.main || "#3f51b5",
  "&.Mui-checked": {
    color: theme.palette.baseColor?.main || "#3f51b5",
  },
}));

interface SelectedTripProps {
  selectedTrip: string;
  setSelectedTrip: (value: string) => void;
}

const SelectedTrip = ({ selectedTrip, setSelectedTrip }: SelectedTripProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTrip(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-labelledby="trip-type-radio-group"
        name="trip-type"
        value={selectedTrip}
        onChange={handleChange}
        sx={{
          "& .MuiFormControlLabel-label": {
            color: "baseColor.main",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "0.875rem",
          },
        }}
      >
        <FormControlLabel
          value="round_trip"
          control={<BaseColorRadio />}
          label="Round Trip"
        />
        <FormControlLabel
          value="one_way"
          control={<BaseColorRadio />}
          label="One Way"
        />
        <FormControlLabel
          value="multi_city"
          control={<BaseColorRadio />}
          label="Multi City"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default SelectedTrip;
