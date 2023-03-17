import React from 'react';
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

export default function TabContainer() {
  const [tabNumber, setTabNumber] = React.useState(0);
  const [tabContents, setTabContents] = React.useState("");


  React.useEffect(() => {
    if(tabNumber === 0 ) {
      setTabContents("Display General Airport Info here")
    } else if(tabNumber === 1) {
      setTabContents("Display Airport Map here")
    } else {
      setTabContents("Display Important updates here")
    }
  }, [tabNumber])

  
  return (
    <div>
      <Paper square>
        <Tabs
          value={tabNumber}
          textColor="primary"
          indicatorColor="primary"
          onChange={(event, newTabNumber) => {
            setTabNumber(newTabNumber);
          }}
        >
          <Tab label="General Info" />
          <Tab label="Airport Map" />
          <Tab label="Important Updates" />
        </Tabs>

       
        <p>{tabContents}</p>
      </Paper>
    </div>
  );
};