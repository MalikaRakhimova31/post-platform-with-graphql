import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import styles from './Moleculas.module.scss'
import StatusCounter from 'components/atoms/StatusCounter';
import CustomizedTables from './CustomTable';
import { useSelector } from 'react-redux';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function CustomTabs({tabLabel}) {
  const [value, setValue] = React.useState(0);
  const postData = useSelector(state => state.post.data)
  const [draft, setDraft] = useState([])
  const [published, setPublished] = useState([])
  console.log("postData", postData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setDraft(postData.filter((item) => item.status === 'Draft'))
    setPublished(postData.filter((item) => item.status === 'Published'))
  }, [])

  return (
    <>
    <div>
      <div className='mt-3 mb-7'>
        <Tabs id='statusTabs' value={value} onChange={handleChange} aria-label="basic tabs example" className={styles.tabParent}>
        {tabLabel.map((item, index) => <Tab  label={item.name} {...a11yProps(index)} 
                sx={{ p: 0, 
                  textTransform: 'none',
                }}
                className={styles.tabButton}
                key={`status-${item.status}`}
                icon={<StatusCounter count={item.name === 'Draft' ? draft.length : item.name === 'Published' ? published.length : postData.length}/>}
                iconPosition='right'
            />)}
        </Tabs>
      </div>
        <TabPanel value={value} index={0}>
          {postData.length > 0 ? <CustomizedTables posts={postData} /> : 
          <div className='w-full min-h-[70vh] flex items-center justify-center'><img src='/images/empty.svg' alt='no data image' className='w-[300px] h-[400]'/></div>
          }
      </TabPanel>
        <TabPanel value={value} index={1}>
          {draft.length > 0 ? <CustomizedTables posts={draft} /> : 
          <div className='w-full min-h-[70vh] flex items-center justify-center'><img src='/images/empty.svg' alt='no data image' className='w-[300px] h-[400]'/></div>
          }
      </TabPanel>
        <TabPanel value={value} index={2}>
          {published.length > 0 ? <CustomizedTables posts={published} /> : 
          <div className='w-full min-h-[70vh] flex items-center justify-center'><img src='/images/empty.svg' alt='no data image' className='w-[300px] h-[400]'/></div>
          }
      </TabPanel>
    </div>
    </>
  );
}