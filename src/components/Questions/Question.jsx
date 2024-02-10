
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



function Question() {
  return (
    <>
    <div className='container mt-3 mb-5'>
        <div className='d-flex justify-content-center mt-3 '>
<h4 className='fs-2 font-semibold'>Wait! I Have Some Questions </h4>

        </div>
        <div className='mt-4 item_accoedion'>
      <Accordion  className='item_accoedion' > 
        <AccordionSummary
       
          expandIcon={<ArrowDownwardIcon />}
         
         
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className='item_accoedion' > 
        <AccordionSummary
       
          expandIcon={<ArrowDownwardIcon />}
         
         
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className='item_accoedion' > 
        <AccordionSummary
       
          expandIcon={<ArrowDownwardIcon />}
         
         
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className='item_accoedion' > 
        <AccordionSummary
       
          expandIcon={<ArrowDownwardIcon />}
         
         
        >
          <Typography>Accordion 4</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
   
    </div>
    </div>
    </>
  );
}

export default Question;