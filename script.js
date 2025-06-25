// All US states
const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 
    'Wisconsin', 'Wyoming'
];

// State data (last updated: January 2025)
const stateData = {
    'Alabama': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://www.labor.alabama.gov/" target="_blank">Alabama Department of Labor</a>',
            '<a href="https://www.revenue.alabama.gov/" target="_blank">Alabama Department of Revenue</a>',
            '<a href="https://www.dir.alabama.gov/" target="_blank">Alabama Department of Industrial Relations</a>'
        ],
        businessRating: {
            color: 'green',
            rating: 'Business Friendly',
            description: 'Alabama offers a very business-friendly environment with right-to-work laws, at-will employment, no state minimum wage requirements above federal, and no mandatory paid sick leave or parental leave benefits beyond FMLA.'
        }
    },
    'Alaska': {
        hiring: [
            'Minimum wage: $11.73/hour (2025)',
            'Required overtime after 8 hours/day',
            'At-will employment state',
            'No right-to-work law',
            'Workers compensation required'
        ],
        risks: [
            'Daily overtime requirements (8+ hours)',
            'Strong union presence limits termination flexibility',
            'No state parental leave beyond FMLA',
            'Complex scheduling requirements for certain industries',
            'Higher workers compensation costs'
        ],
        taxLinks: [
            '<a href="https://labor.alaska.gov/" target="_blank">Alaska Department of Labor</a>',
            '<a href="https://tax.alaska.gov/" target="_blank">Alaska Department of Revenue</a>',
            '<a href="https://www.commerce.alaska.gov/" target="_blank">Alaska Department of Commerce</a>'
        ]
    },
    'Arizona': {
        hiring: [
            'Minimum wage: $14.70/hour (2025)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'Earned paid sick time required'
        ],
        risks: [
            'Mandatory earned paid sick time (40 hours annually)',
            'At-will termination with minimal restrictions',
            'Local ordinances may add sick leave requirements',
            'No state parental leave requirements',
            'Potential retaliation claims for sick leave usage'
        ],
        taxLinks: [
            '<a href="https://www.azica.gov/" target="_blank">Arizona Industrial Commission</a>',
            '<a href="https://azdor.gov/" target="_blank">Arizona Department of Revenue</a>',
            '<a href="https://des.az.gov/" target="_blank">Arizona Department of Economic Security</a>'
        ]
    },
    'Arkansas': {
        hiring: [
            'Minimum wage: $12.00/hour (2025)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://www.labor.arkansas.gov/" target="_blank">Arkansas Department of Labor</a>',
            '<a href="https://www.dfa.arkansas.gov/" target="_blank">Arkansas Department of Finance</a>',
            '<a href="https://www.arkansas.gov/dws/" target="_blank">Arkansas Division of Workforce Services</a>'
        ]
    },
    'California': {
        hiring: [
            'Minimum wage: $17.00/hour (2025)',
            'Required: California Disability Insurance (SDI)',
            'Required: Paid Family Leave (PFL)',
            'Background checks: Ban the Box law applies',
            'Required: Sexual harassment training for managers',
            'Salary range disclosure required in job postings'
        ],
        risks: [
            'Strict termination procedures - difficult to fire employees',
            'Paid Family Leave: 8 weeks bonding, 6 weeks care',
            'Mandatory sick leave: 40+ hours annually',
            'FEHA protections limit termination reasons',
            'Local ordinances add parental leave (SF: 12 weeks)',
            'WARN Act requires 60-day layoff notice'
        ],
        taxLinks: [
            '<a href="https://www.edd.ca.gov/" target="_blank">CA Employment Development Department</a>',
            '<a href="https://www.cdtfa.ca.gov/" target="_blank">CA Department of Tax and Fee Administration</a>',
            '<a href="https://www.ftb.ca.gov/" target="_blank">Franchise Tax Board</a>'
        ]
    },
    'Colorado': {
        hiring: [
            'Minimum wage: $14.81/hour (2025)',
            'Required: Paid sick leave',
            'At-will employment state',
            'Salary range disclosure required',
            'Workers compensation required'
        ],
        risks: [
            'FAMLI paid leave: 12 weeks family, 4 weeks medical (2024+)',
            'Mandatory paid sick leave: 48 hours annually',
            'Equal Pay Act limits salary negotiation flexibility',
            'Job posting transparency requirements',
            'Wrongful termination claims for leave retaliation'
        ],
        taxLinks: [
            '<a href="https://cdle.colorado.gov/" target="_blank">Colorado Department of Labor</a>',
            '<a href="https://tax.colorado.gov/" target="_blank">Colorado Department of Revenue</a>',
            '<a href="https://www.colorado.gov/cdphe" target="_blank">Colorado Department of Public Health</a>'
        ]
    },
    'Connecticut': {
        hiring: [
            'Minimum wage: $16.35/hour (2025)',
            'Required: Paid sick leave',
            'Required: Paid family and medical leave',
            'At-will employment state',
            'Workers compensation required'
        ],
        risks: [
            'Paid Family Leave: 12 weeks annually',
            'Mandatory paid sick leave: 40 hours annually',
            'Ban the Box restricts background check timing',
            'Pregnancy accommodation requirements',
            'Complex termination procedures for protected classes'
        ],
        taxLinks: [
            '<a href="https://www.ctdol.state.ct.us/" target="_blank">Connecticut Department of Labor</a>',
            '<a href="https://portal.ct.gov/DRS" target="_blank">Connecticut Department of Revenue</a>',
            '<a href="https://www.ctpaidleave.org/" target="_blank">Connecticut Paid Leave Authority</a>'
        ]
    },
    'Delaware': {
        hiring: [
            'Minimum wage: $11.75/hour (2025)',
            'At-will employment state',
            'No right-to-work law',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with union considerations',
            'No state parental leave requirements beyond FMLA',
            'Potential collective bargaining restrictions',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies'
        ],
        taxLinks: [
            '<a href="https://dia.delawareworks.com/" target="_blank">Delaware Department of Labor</a>',
            '<a href="https://revenue.delaware.gov/" target="_blank">Delaware Division of Revenue</a>',
            '<a href="https://delawareworks.com/" target="_blank">Delaware Department of Labor</a>'
        ]
    },
    'Florida': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="http://www.floridajobs.org/" target="_blank">Florida Department of Economic Opportunity</a>',
            '<a href="https://floridarevenue.com/" target="_blank">Florida Department of Revenue</a>',
            '<a href="https://www.myfloridacfo.com/" target="_blank">Florida Department of Financial Services</a>'
        ]
    },
    'Georgia': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://dol.georgia.gov/" target="_blank">Georgia Department of Labor</a>',
            '<a href="https://dor.georgia.gov/" target="_blank">Georgia Department of Revenue</a>',
            '<a href="https://sbwc.georgia.gov/" target="_blank">Georgia State Board of Workers Compensation</a>'
        ]
    },
    'Hawaii': {
        hiring: [
            'Minimum wage: $12.00/hour (2025)',
            'Required: Temporary Disability Insurance',
            'Required: Prepaid Healthcare Act compliance',
            'At-will employment state',
            'Workers compensation required'
        ],
        risks: [
            'Prepaid Healthcare Act requires employer health coverage',
            'Family Leave Law: 4 weeks bonding leave',
            'TDI benefits limit termination flexibility',
            'Aloha Spirit Law affects workplace culture requirements',
            'Complex healthcare compliance for part-time workers'
        ],
        taxLinks: [
            '<a href="https://labor.hawaii.gov/" target="_blank">Hawaii Department of Labor</a>',
            '<a href="https://tax.hawaii.gov/" target="_blank">Hawaii Department of Taxation</a>',
            '<a href="https://dlir.hawaii.gov/" target="_blank">Hawaii Department of Labor and Industrial Relations</a>'
        ]
    },
    'Idaho': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://labor.idaho.gov/" target="_blank">Idaho Department of Labor</a>',
            '<a href="https://tax.idaho.gov/" target="_blank">Idaho State Tax Commission</a>',
            '<a href="https://iic.idaho.gov/" target="_blank">Idaho Industrial Commission</a>'
        ]
    },
    'Illinois': {
        hiring: [
            'Minimum wage: $14.00/hour (2025)',
            'Required: Paid sick leave (Chicago)',
            'At-will employment state',
            'No right-to-work law',
            'Workers compensation required'
        ],
        risks: [
            'Chicago: 40 hours paid sick leave annually',
            'BIPA biometric data consent requirements',
            'Union presence limits termination flexibility',
            'Cook County also has paid sick leave requirements',
            'Complex local ordinance compliance needed'
        ],
        taxLinks: [
            '<a href="https://www2.illinois.gov/idol/" target="_blank">Illinois Department of Labor</a>',
            '<a href="https://www2.illinois.gov/rev/" target="_blank">Illinois Department of Revenue</a>',
            '<a href="https://www.iwcc.il.gov/" target="_blank">Illinois Workers Compensation Commission</a>'
        ]
    },
    'Indiana': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://www.in.gov/dol/" target="_blank">Indiana Department of Labor</a>',
            '<a href="https://www.in.gov/dor/" target="_blank">Indiana Department of Revenue</a>',
            '<a href="https://www.in.gov/wcb/" target="_blank">Indiana Worker Compensation Board</a>'
        ]
    },
    'Iowa': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://www.iowaworkforcedevelopment.gov/" target="_blank">Iowa Workforce Development</a>',
            '<a href="https://tax.iowa.gov/" target="_blank">Iowa Department of Revenue</a>',
            '<a href="https://www.iowaworkcomp.gov/" target="_blank">Iowa Workers Compensation</a>'
        ]
    },
    'Kansas': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://www.dol.ks.gov/" target="_blank">Kansas Department of Labor</a>',
            '<a href="https://www.ksrevenue.gov/" target="_blank">Kansas Department of Revenue</a>',
            '<a href="https://www.dol.ks.gov/workcomp" target="_blank">Kansas Workers Compensation</a>'
        ]
    },
    'Kentucky': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://labor.ky.gov/" target="_blank">Kentucky Labor Cabinet</a>',
            '<a href="https://revenue.ky.gov/" target="_blank">Kentucky Department of Revenue</a>',
            '<a href="https://kylabor.ky.gov/" target="_blank">Kentucky Department of Workplace Standards</a>'
        ]
    },
    'Louisiana': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://www.laworks.net/" target="_blank">Louisiana Workforce Commission</a>',
            '<a href="https://www.revenue.louisiana.gov/" target="_blank">Louisiana Department of Revenue</a>',
            '<a href="https://www.laworks.net/WorkersComp/" target="_blank">Louisiana Workers Compensation</a>'
        ]
    },
    'Maine': {
        hiring: [
            'Minimum wage: $14.65/hour (2025)',
            'Required: Paid sick leave',
            'At-will employment state',
            'No right-to-work law',
            'Workers compensation required'
        ],
        risks: [
            'Mandatory paid sick leave: 40 hours annually',
            'Union presence limits termination flexibility',
            'No state parental leave beyond FMLA currently',
            'Wrongful termination claims for leave retaliation',
            'Complex collective bargaining considerations'
        ],
        taxLinks: [
            '<a href="https://www.maine.gov/labor/" target="_blank">Maine Department of Labor</a>',
            '<a href="https://www.maine.gov/revenue/" target="_blank">Maine Revenue Services</a>',
            '<a href="https://www.maine.gov/wcb/" target="_blank">Maine Workers Compensation Board</a>'
        ]
    },
    'Maryland': {
        hiring: [
            'Minimum wage: $15.00/hour (2025)',
            'Required: Paid sick leave',
            'At-will employment state',
            'No right-to-work law',
            'Workers compensation required'
        ],
        risks: [
            'Mandatory paid sick leave: 40+ hours annually',
            'Montgomery County: 56 hours paid sick/safe leave',
            'Union presence limits termination flexibility',
            'Ban the Box restricts background check timing',
            'Paid family leave coming 2026'
        ],
        taxLinks: [
            '<a href="https://www.dllr.state.md.us/" target="_blank">Maryland Department of Labor</a>',
            '<a href="https://www.comptroller.maryland.gov/" target="_blank">Maryland Comptroller</a>',
            '<a href="https://www.wcc.state.md.us/" target="_blank">Maryland Workers Compensation Commission</a>'
        ]
    },
    'Massachusetts': {
        hiring: [
            'Minimum wage: $15.75/hour (2025)',
            'Required: Paid sick leave',
            'Required: Paid family and medical leave',
            'At-will employment state',
            'Workers compensation required'
        ],
        risks: [
            'Paid Family Leave: 12 weeks bonding, 20 weeks medical',
            'Mandatory paid sick leave: 40 hours annually',
            'Complex termination procedures for protected classes',
            'Ban the Box restricts background check timing',
            'Pregnancy accommodation requirements'
        ],
        taxLinks: [
            '<a href="https://www.mass.gov/dol" target="_blank">Massachusetts Department of Labor</a>',
            '<a href="https://www.mass.gov/dor" target="_blank">Massachusetts Department of Revenue</a>',
            '<a href="https://www.mass.gov/dia" target="_blank">Massachusetts Department of Industrial Accidents</a>'
        ]
    },
    'Michigan': {
        hiring: [
            'Minimum wage: $10.33/hour (2025)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'Required: Paid sick leave'
        ],
        risks: [
            'Mandatory paid sick leave: 40 hours annually',
            'At-will termination with sick leave protections',
            'Wrongful termination claims for leave retaliation',
            'No state parental leave requirements beyond FMLA',
            'Local ordinances may add requirements'
        ],
        taxLinks: [
            '<a href="https://www.michigan.gov/leo" target="_blank">Michigan Department of Labor</a>',
            '<a href="https://www.michigan.gov/treasury" target="_blank">Michigan Department of Treasury</a>',
            '<a href="https://www.michigan.gov/wca" target="_blank">Michigan Workers Compensation Agency</a>'
        ]
    },
    'Minnesota': {
        hiring: [
            'Minimum wage: $10.85/hour (2025)',
            'Required: Paid sick leave',
            'At-will employment state',
            'No right-to-work law',
            'Workers compensation required'
        ],
        risks: [
            'Paid Family Leave: 12 weeks bonding starting 2026',
            'Mandatory paid sick leave: 48 hours annually',
            'Union presence limits termination flexibility',
            'Complex pregnancy accommodation requirements',
            'Local ordinances add sick leave requirements'
        ],
        taxLinks: [
            '<a href="https://www.dli.mn.gov/" target="_blank">Minnesota Department of Labor</a>',
            '<a href="https://www.revenue.state.mn.us/" target="_blank">Minnesota Department of Revenue</a>',
            '<a href="https://www.dli.mn.gov/workers-compensation" target="_blank">Minnesota Workers Compensation</a>'
        ]
    },
    'Mississippi': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://mdes.ms.gov/" target="_blank">Mississippi Department of Employment Security</a>',
            '<a href="https://www.dor.ms.gov/" target="_blank">Mississippi Department of Revenue</a>',
            '<a href="https://www.mwcc.ms.gov/" target="_blank">Mississippi Workers Compensation Commission</a>'
        ]
    },
    'Missouri': {
        hiring: [
            'Minimum wage: $12.00/hour (2025)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://labor.mo.gov/" target="_blank">Missouri Department of Labor</a>',
            '<a href="https://dor.mo.gov/" target="_blank">Missouri Department of Revenue</a>',
            '<a href="https://labor.mo.gov/dwc" target="_blank">Missouri Division of Workers Compensation</a>'
        ]
    },
    'Montana': {
        hiring: [
            'Minimum wage: $10.30/hour (2025)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'Wrongful Discharge Act limits at-will termination',
            'Good cause required for termination after probation',
            'No state parental leave requirements beyond FMLA',
            'Potential wrongful termination liability',
            'Limited probationary period protections'
        ],
        taxLinks: [
            '<a href="https://erd.dli.mt.gov/" target="_blank">Montana Department of Labor</a>',
            '<a href="https://mtrevenue.gov/" target="_blank">Montana Department of Revenue</a>',
            '<a href="https://erd.dli.mt.gov/compensation-regulation" target="_blank">Montana Compensation Court</a>'
        ]
    },
    'Nebraska': {
        hiring: [
            'Minimum wage: $12.00/hour (2025)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://dol.nebraska.gov/" target="_blank">Nebraska Department of Labor</a>',
            '<a href="https://revenue.nebraska.gov/" target="_blank">Nebraska Department of Revenue</a>',
            '<a href="https://wcc.nebraska.gov/" target="_blank">Nebraska Workers Compensation Court</a>'
        ]
    },
    'Nevada': {
        hiring: [
            'Minimum wage: $12.00/hour (2025)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'Required: Paid sick leave'
        ],
        risks: [
            'Mandatory paid sick leave: 40 hours annually',
            'At-will termination with sick leave protections',
            'Wrongful termination claims for leave retaliation',
            'No state parental leave requirements beyond FMLA',
            'Complex scheduling requirements for certain industries'
        ],
        taxLinks: [
            '<a href="https://labor.nv.gov/" target="_blank">Nevada Labor Commissioner</a>',
            '<a href="https://tax.nv.gov/" target="_blank">Nevada Department of Taxation</a>',
            '<a href="https://dir.nv.gov/" target="_blank">Nevada Department of Business and Industry</a>'
        ]
    },
    'New Hampshire': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://www.nh.gov/labor/" target="_blank">New Hampshire Department of Labor</a>',
            '<a href="https://www.revenue.nh.gov/" target="_blank">New Hampshire Department of Revenue</a>',
            '<a href="https://www.nh.gov/labor/workers-compensation/" target="_blank">New Hampshire Workers Compensation</a>'
        ]
    },
    'New Jersey': {
        hiring: [
            'Minimum wage: $15.13/hour (2025)',
            'Required: Paid sick leave',
            'Required: Temporary disability insurance',
            'At-will employment state',
            'Workers compensation required'
        ],
        risks: [
            'Paid Family Leave: 6 weeks bonding, 6 weeks care',
            'Mandatory paid sick leave: 40 hours annually',
            'TDI benefits limit termination timing',
            'Ban the Box restricts background check timing',
            'Pregnancy accommodation requirements'
        ],
        taxLinks: [
            '<a href="https://www.nj.gov/labor/" target="_blank">New Jersey Department of Labor</a>',
            '<a href="https://www.state.nj.us/treasury/taxation/" target="_blank">New Jersey Division of Taxation</a>',
            '<a href="https://www.nj.gov/labor/wc/wc_index.html" target="_blank">New Jersey Workers Compensation</a>'
        ]
    },
    'New Mexico': {
        hiring: [
            'Minimum wage: $12.70/hour (2025)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'Required: Paid sick leave'
        ],
        risks: [
            'Mandatory paid sick leave: 64 hours annually',
            'At-will termination with sick leave protections',
            'Wrongful termination claims for leave retaliation',
            'No state parental leave requirements beyond FMLA',
            'Local ordinances may add requirements'
        ],
        taxLinks: [
            '<a href="https://www.dws.state.nm.us/" target="_blank">New Mexico Department of Workforce Solutions</a>',
            '<a href="https://www.tax.newmexico.gov/" target="_blank">New Mexico Taxation and Revenue</a>',
            '<a href="https://www.workerscomp.state.nm.us/" target="_blank">New Mexico Workers Compensation</a>'
        ]
    },
    'New York': {
        hiring: [
            'Minimum wage: $15.00/hour (NYC/Long Island/Westchester)',
            'Required: Paid Family Leave',
            'Required: Disability Insurance',
            'Sexual harassment training mandatory',
            'Salary range disclosure required in job postings',
            'Required: Paid sick leave'
        ],
        risks: [
            'Paid Family Leave: 12 weeks bonding annually',
            'NYC: 40+ hours paid sick/safe leave annually',
            'Complex termination procedures - difficult to fire',
            'Disability benefits limit termination timing',
            'WARN Act requires 90-day layoff notice',
            'Ban the Box restricts background checks'
        ],
        taxLinks: [
            '<a href="https://www.labor.ny.gov/" target="_blank">NY Department of Labor</a>',
            '<a href="https://www.tax.ny.gov/" target="_blank">NY Department of Taxation and Finance</a>',
            '<a href="https://www.wcb.ny.gov/" target="_blank">NY Workers Compensation Board</a>'
        ]
    },
    'North Carolina': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://www.labor.nc.gov/" target="_blank">North Carolina Department of Labor</a>',
            '<a href="https://www.ncdor.gov/" target="_blank">North Carolina Department of Revenue</a>',
            '<a href="https://www.ic.nc.gov/" target="_blank">North Carolina Industrial Commission</a>'
        ]
    },
    'North Dakota': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://www.nd.gov/labor/" target="_blank">North Dakota Department of Labor</a>',
            '<a href="https://www.nd.gov/tax/" target="_blank">North Dakota Tax Department</a>',
            '<a href="https://www.workforcesafety.com/" target="_blank">North Dakota Workforce Safety</a>'
        ]
    },
    'Ohio': {
        hiring: [
            'Minimum wage: $10.45/hour (2025)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://www.com.ohio.gov/divisions-and-programs/division-of-industrial-compliance-and-labor" target="_blank">Ohio Department of Commerce</a>',
            '<a href="https://tax.ohio.gov/" target="_blank">Ohio Department of Taxation</a>',
            '<a href="https://www.bwc.ohio.gov/" target="_blank">Ohio Bureau of Workers Compensation</a>'
        ]
    },
    'Oklahoma': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://www.ok.gov/odol/" target="_blank">Oklahoma Department of Labor</a>',
            '<a href="https://www.ok.gov/tax/" target="_blank">Oklahoma Tax Commission</a>',
            '<a href="https://www.wcc.ok.gov/" target="_blank">Oklahoma Workers Compensation Commission</a>'
        ]
    },
    'Oregon': {
        hiring: [
            'Minimum wage: $15.20/hour (Portland metro, 2025)',
            'Required: Paid sick leave',
            'At-will employment state',
            'No right-to-work law',
            'Workers compensation required'
        ],
        risks: [
            'Paid Family Leave: 12 weeks bonding starting 2023',
            'Mandatory paid sick leave: 40+ hours annually',
            'Union presence limits termination flexibility',
            'Ban the Box restricts background check timing',
            'Predictive scheduling requirements (Portland)'
        ],
        taxLinks: [
            '<a href="https://www.oregon.gov/boli/" target="_blank">Oregon Bureau of Labor and Industries</a>',
            '<a href="https://www.oregon.gov/dor/" target="_blank">Oregon Department of Revenue</a>',
            '<a href="https://www.oregon.gov/dcbs/wcd/" target="_blank">Oregon Workers Compensation Division</a>'
        ]
    },
    'Pennsylvania': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'No right-to-work law',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'Union presence limits termination flexibility',
            'Philadelphia: 40 hours paid sick leave annually',
            'Complex collective bargaining considerations',
            'No state parental leave requirements beyond FMLA',
            'Local ordinances add sick leave requirements'
        ],
        taxLinks: [
            '<a href="https://www.dli.pa.gov/" target="_blank">Pennsylvania Department of Labor</a>',
            '<a href="https://www.revenue.pa.gov/" target="_blank">Pennsylvania Department of Revenue</a>',
            '<a href="https://www.dli.pa.gov/Businesses/Compensation/WC/" target="_blank">Pennsylvania Workers Compensation</a>'
        ]
    },
    'Rhode Island': {
        hiring: [
            'Minimum wage: $14.70/hour (2025)',
            'Required: Paid sick leave',
            'Required: Temporary disability insurance',
            'At-will employment state',
            'Workers compensation required'
        ],
        risks: [
            'Temporary Caregiver Insurance: 5 weeks family leave',
            'Mandatory paid sick leave: 40 hours annually',
            'TDI benefits limit termination timing',
            'Fair Employment Act protections',
            'Pregnancy accommodation requirements'
        ],
        taxLinks: [
            '<a href="https://www.dlt.ri.gov/" target="_blank">Rhode Island Department of Labor</a>',
            '<a href="https://tax.ri.gov/" target="_blank">Rhode Island Division of Taxation</a>',
            '<a href="https://www.dlt.ri.gov/wc/" target="_blank">Rhode Island Workers Compensation</a>'
        ]
    },
    'South Carolina': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://llr.sc.gov/" target="_blank">South Carolina Department of Labor</a>',
            '<a href="https://dor.sc.gov/" target="_blank">South Carolina Department of Revenue</a>',
            '<a href="https://wcc.sc.gov/" target="_blank">South Carolina Workers Compensation Commission</a>'
        ]
    },
    'South Dakota': {
        hiring: [
            'Minimum wage: $11.20/hour (2025)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://dlr.sd.gov/" target="_blank">South Dakota Department of Labor</a>',
            '<a href="https://dor.sd.gov/" target="_blank">South Dakota Department of Revenue</a>',
            '<a href="https://dlr.sd.gov/safety/workers_compensation.aspx" target="_blank">South Dakota Workers Compensation</a>'
        ]
    },
    'Tennessee': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://www.tn.gov/labor/" target="_blank">Tennessee Department of Labor</a>',
            '<a href="https://www.tn.gov/revenue/" target="_blank">Tennessee Department of Revenue</a>',
            '<a href="https://www.tn.gov/labor/workers-compensation.html" target="_blank">Tennessee Workers Compensation</a>'
        ]
    },
    'Texas': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'No state income tax withholding',
            'Workers compensation insurance required',
            'Right-to-work state'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal',
            'Austin: paid sick leave ordinance (limited scope)'
        ],
        taxLinks: [
            '<a href="https://www.twc.texas.gov/" target="_blank">Texas Workforce Commission</a>',
            '<a href="https://comptroller.texas.gov/" target="_blank">Texas Comptroller</a>',
            '<a href="https://www.tdi.texas.gov/" target="_blank">Texas Department of Insurance</a>'
        ]
    },
    'Utah': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://jobs.utah.gov/" target="_blank">Utah Department of Workforce Services</a>',
            '<a href="https://tax.utah.gov/" target="_blank">Utah State Tax Commission</a>',
            '<a href="https://laborcommission.utah.gov/" target="_blank">Utah Labor Commission</a>'
        ]
    },
    'Vermont': {
        hiring: [
            'Minimum wage: $13.18/hour (2025)',
            'Required: Paid sick leave',
            'At-will employment state',
            'No right-to-work law',
            'Workers compensation required'
        ],
        risks: [
            'Parental Leave: 12 weeks bonding (unpaid but job protected)',
            'Mandatory paid sick leave: 40 hours annually',
            'Union presence limits termination flexibility',
            'No state parental leave pay currently',
            'Complex pregnancy accommodation requirements'
        ],
        taxLinks: [
            '<a href="https://labor.vermont.gov/" target="_blank">Vermont Department of Labor</a>',
            '<a href="https://tax.vermont.gov/" target="_blank">Vermont Department of Taxes</a>',
            '<a href="https://labor.vermont.gov/workers-compensation" target="_blank">Vermont Workers Compensation</a>'
        ]
    },
    'Virginia': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://www.doli.virginia.gov/" target="_blank">Virginia Department of Labor</a>',
            '<a href="https://www.tax.virginia.gov/" target="_blank">Virginia Department of Taxation</a>',
            '<a href="https://www.vwc.virginia.gov/" target="_blank">Virginia Workers Compensation Commission</a>'
        ]
    },
    'Washington': {
        hiring: [
            'Minimum wage: $16.28/hour (2025)',
            'Required: Paid sick leave',
            'Required: Paid family and medical leave',
            'At-will employment state',
            'Workers compensation required'
        ],
        risks: [
            'Paid Family Leave: 12 weeks bonding, 12 weeks medical',
            'Mandatory paid sick leave: 40+ hours annually',
            'Seattle: 40+ hours paid sick/safe leave annually',
            'Ban the Box restricts background check timing',
            'Predictive scheduling requirements (Seattle)'
        ],
        taxLinks: [
            '<a href="https://www.lni.wa.gov/" target="_blank">Washington Department of Labor</a>',
            '<a href="https://dor.wa.gov/" target="_blank">Washington Department of Revenue</a>',
            '<a href="https://www.lni.wa.gov/insurance/" target="_blank">Washington Workers Compensation</a>'
        ]
    },
    'West Virginia': {
        hiring: [
            'Minimum wage: $8.75/hour (2025)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://labor.wv.gov/" target="_blank">West Virginia Department of Labor</a>',
            '<a href="https://tax.wv.gov/" target="_blank">West Virginia State Tax Department</a>',
            '<a href="https://www.wvinsurance.gov/" target="_blank">West Virginia Offices of the Insurance Commissioner</a>'
        ]
    },
    'Wisconsin': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://dwd.wisconsin.gov/" target="_blank">Wisconsin Department of Workforce Development</a>',
            '<a href="https://www.revenue.wi.gov/" target="_blank">Wisconsin Department of Revenue</a>',
            '<a href="https://dwd.wisconsin.gov/wc/" target="_blank">Wisconsin Workers Compensation</a>'
        ]
    },
    'Wyoming': {
        hiring: [
            'No state minimum wage (federal $7.25/hour applies)',
            'At-will employment state',
            'Right-to-work state',
            'Workers compensation required',
            'No state-mandated paid sick leave'
        ],
        risks: [
            'At-will termination with minimal restrictions',
            'No state parental leave requirements beyond FMLA',
            'Limited wrongful termination protections',
            'No mandatory sick leave policies',
            'Minimal overtime protections beyond federal'
        ],
        taxLinks: [
            '<a href="https://wyomingworkforce.org/" target="_blank">Wyoming Department of Workforce Services</a>',
            '<a href="https://revenue.wyo.gov/" target="_blank">Wyoming Department of Revenue</a>',
            '<a href="https://wyomingworkforce.org/workers-compensation/" target="_blank">Wyoming Workers Compensation</a>'
        ]
    }
};

// Business Friendliness Ratings for all states
const businessRatings = {
    'Alabama': { color: 'green', rating: 'Business Friendly', description: 'Alabama offers a very business-friendly environment with right-to-work laws, at-will employment, no state minimum wage requirements above federal, and no mandatory paid sick leave or parental leave benefits beyond FMLA.' },
    'Alaska': { color: 'yellow', rating: 'Moderate Risk', description: 'Alaska has some business challenges including daily overtime requirements after 8 hours, strong union presence, and higher workers compensation costs, but no state parental leave requirements.' },
    'Arizona': { color: 'yellow', rating: 'Moderate Risk', description: 'Arizona requires mandatory earned sick time (40 hours annually) and has a higher minimum wage, but maintains right-to-work laws and at-will employment with no state parental leave requirements.' },
    'Arkansas': { color: 'green', rating: 'Business Friendly', description: 'Arkansas provides a business-friendly environment with right-to-work laws, at-will employment, and no mandatory sick leave or parental leave requirements beyond federal minimums.' },
    'California': { color: 'red', rating: 'High Risk', description: 'California has extensive employee protections including strict termination procedures, paid family leave (8 weeks bonding), mandatory sick leave (40+ hours), and complex local ordinances that make it difficult to terminate employees and expensive to operate.' },
    'Colorado': { color: 'red', rating: 'High Risk', description: 'Colorado requires FAMLI paid leave (12 weeks family, 4 weeks medical), mandatory paid sick leave (48 hours), salary range disclosure requirements, and has strict equal pay laws that limit employer flexibility.' },
    'Connecticut': { color: 'red', rating: 'High Risk', description: 'Connecticut mandates paid family leave (12 weeks annually), paid sick leave (40 hours), ban the box restrictions, and has complex termination procedures for protected classes.' },
    'Delaware': { color: 'yellow', rating: 'Moderate Risk', description: 'Delaware lacks right-to-work protections and has potential collective bargaining restrictions, but no mandatory sick leave or state parental leave requirements beyond FMLA.' },
    'Florida': { color: 'green', rating: 'Business Friendly', description: 'Florida offers excellent business conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory sick leave or parental leave requirements.' },
    'Georgia': { color: 'green', rating: 'Business Friendly', description: 'Georgia provides a very business-friendly environment with right-to-work laws, at-will employment, no state minimum wage requirements above federal, and minimal employee protection mandates.' },
    'Hawaii': { color: 'red', rating: 'High Risk', description: 'Hawaii requires employer-provided health coverage under the Prepaid Healthcare Act, mandates 4 weeks bonding leave, and has TDI benefits that limit termination flexibility and increase costs.' },
    'Idaho': { color: 'green', rating: 'Business Friendly', description: 'Idaho offers excellent business conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory paid sick leave or parental leave requirements.' },
    'Illinois': { color: 'yellow', rating: 'Moderate Risk', description: 'Illinois has BIPA biometric data requirements, Chicago mandates 40 hours paid sick leave, strong union presence limits termination flexibility, and multiple local ordinances create compliance complexity.' },
    'Indiana': { color: 'green', rating: 'Business Friendly', description: 'Indiana provides excellent business conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory sick leave or parental leave requirements.' },
    'Iowa': { color: 'green', rating: 'Business Friendly', description: 'Iowa offers very business-friendly conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory paid sick leave or parental leave requirements.' },
    'Kansas': { color: 'green', rating: 'Business Friendly', description: 'Kansas provides excellent business conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory sick leave or parental leave requirements.' },
    'Kentucky': { color: 'green', rating: 'Business Friendly', description: 'Kentucky offers very business-friendly conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory paid sick leave or parental leave requirements.' },
    'Louisiana': { color: 'green', rating: 'Business Friendly', description: 'Louisiana provides excellent business conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory sick leave or parental leave requirements.' },
    'Maine': { color: 'yellow', rating: 'Moderate Risk', description: 'Maine requires mandatory paid sick leave (40 hours annually) and has strong union presence that limits termination flexibility, but no state parental leave requirements currently.' },
    'Maryland': { color: 'red', rating: 'High Risk', description: 'Maryland mandates paid sick leave (40+ hours), Montgomery County requires 56 hours paid sick/safe leave, has strong union presence, ban the box restrictions, and paid family leave starting 2026.' },
    'Massachusetts': { color: 'red', rating: 'High Risk', description: 'Massachusetts requires extensive paid family leave (12 weeks bonding, 20 weeks medical), mandatory sick leave (40 hours), complex termination procedures, ban the box restrictions, and pregnancy accommodation requirements.' },
    'Michigan': { color: 'yellow', rating: 'Moderate Risk', description: 'Michigan mandates paid sick leave (40 hours annually) with protections against retaliation, though it maintains right-to-work laws and has no state parental leave requirements beyond FMLA.' },
    'Minnesota': { color: 'red', rating: 'High Risk', description: 'Minnesota will require paid family leave (12 weeks bonding starting 2026), mandates paid sick leave (48 hours annually), has strong union presence limiting termination flexibility, and complex pregnancy accommodation requirements.' },
    'Mississippi': { color: 'green', rating: 'Business Friendly', description: 'Mississippi offers excellent business conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory sick leave or parental leave requirements.' },
    'Missouri': { color: 'green', rating: 'Business Friendly', description: 'Missouri provides very business-friendly conditions with right-to-work laws, at-will employment, and no mandatory sick leave or parental leave requirements beyond federal minimums.' },
    'Montana': { color: 'red', rating: 'High Risk', description: 'Montana\'s Wrongful Discharge Act significantly limits at-will termination by requiring good cause for termination after probationary periods, creating substantial wrongful termination liability risks.' },
    'Nebraska': { color: 'green', rating: 'Business Friendly', description: 'Nebraska offers excellent business conditions with right-to-work laws, at-will employment, and no mandatory sick leave or parental leave requirements beyond federal minimums.' },
    'Nevada': { color: 'yellow', rating: 'Moderate Risk', description: 'Nevada requires mandatory paid sick leave (40 hours annually) with anti-retaliation protections, but maintains right-to-work laws and has no state parental leave requirements beyond FMLA.' },
    'New Hampshire': { color: 'green', rating: 'Business Friendly', description: 'New Hampshire provides excellent business conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory sick leave or parental leave requirements.' },
    'New Jersey': { color: 'red', rating: 'High Risk', description: 'New Jersey requires paid family leave (6 weeks bonding, 6 weeks care), mandatory sick leave (40 hours), TDI benefits that limit termination timing, ban the box restrictions, and pregnancy accommodation requirements.' },
    'New Mexico': { color: 'yellow', rating: 'Moderate Risk', description: 'New Mexico mandates extensive paid sick leave (64 hours annually) with anti-retaliation protections, though it maintains right-to-work laws and has no state parental leave requirements beyond FMLA.' },
    'New York': { color: 'red', rating: 'High Risk', description: 'New York has extensive employee protections including paid family leave (12 weeks bonding), NYC mandates 40+ hours sick/safe leave, complex termination procedures, disability benefits that limit timing, and 90-day layoff notice requirements.' },
    'North Carolina': { color: 'green', rating: 'Business Friendly', description: 'North Carolina offers excellent business conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory sick leave or parental leave requirements.' },
    'North Dakota': { color: 'green', rating: 'Business Friendly', description: 'North Dakota provides very business-friendly conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory sick leave or parental leave requirements.' },
    'Ohio': { color: 'green', rating: 'Business Friendly', description: 'Ohio offers business-friendly conditions with right-to-work laws, at-will employment, and no mandatory sick leave or parental leave requirements beyond federal minimums.' },
    'Oklahoma': { color: 'green', rating: 'Business Friendly', description: 'Oklahoma provides excellent business conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory sick leave or parental leave requirements.' },
    'Oregon': { color: 'red', rating: 'High Risk', description: 'Oregon requires paid family leave (12 weeks bonding), mandatory sick leave (40+ hours), has strong union presence limiting termination flexibility, ban the box restrictions, and Portland has predictive scheduling requirements.' },
    'Pennsylvania': { color: 'yellow', rating: 'Moderate Risk', description: 'Pennsylvania has strong union presence that limits termination flexibility, Philadelphia mandates 40 hours paid sick leave annually, and complex collective bargaining considerations, though no state-wide parental leave requirements.' },
    'Rhode Island': { color: 'red', rating: 'High Risk', description: 'Rhode Island requires Temporary Caregiver Insurance (5 weeks family leave), mandatory paid sick leave (40 hours), TDI benefits that limit termination timing, and pregnancy accommodation requirements.' },
    'South Carolina': { color: 'green', rating: 'Business Friendly', description: 'South Carolina offers excellent business conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory sick leave or parental leave requirements.' },
    'South Dakota': { color: 'green', rating: 'Business Friendly', description: 'South Dakota provides very business-friendly conditions with right-to-work laws, at-will employment, and no mandatory sick leave or parental leave requirements beyond federal minimums.' },
    'Tennessee': { color: 'green', rating: 'Business Friendly', description: 'Tennessee offers excellent business conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory sick leave or parental leave requirements.' },
    'Texas': { color: 'green', rating: 'Business Friendly', description: 'Texas provides very business-friendly conditions with right-to-work laws, at-will employment, no state minimum wage above federal, no state income tax, and minimal mandatory leave requirements (Austin has limited paid sick leave ordinance).' },
    'Utah': { color: 'green', rating: 'Business Friendly', description: 'Utah offers excellent business conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory sick leave or parental leave requirements.' },
    'Vermont': { color: 'yellow', rating: 'Moderate Risk', description: 'Vermont requires 12 weeks unpaid but job-protected parental leave, mandatory paid sick leave (40 hours), and has strong union presence that limits termination flexibility, though no paid parental leave currently.' },
    'Virginia': { color: 'green', rating: 'Business Friendly', description: 'Virginia provides excellent business conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory sick leave or parental leave requirements.' },
    'Washington': { color: 'red', rating: 'High Risk', description: 'Washington requires extensive paid family leave (12 weeks bonding, 12 weeks medical), mandatory sick leave (40+ hours), Seattle mandates additional sick/safe leave, ban the box restrictions, and predictive scheduling requirements.' },
    'West Virginia': { color: 'green', rating: 'Business Friendly', description: 'West Virginia offers business-friendly conditions with right-to-work laws, at-will employment, and no mandatory sick leave or parental leave requirements beyond federal minimums.' },
    'Wisconsin': { color: 'green', rating: 'Business Friendly', description: 'Wisconsin provides excellent business conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory sick leave or parental leave requirements.' },
    'Wyoming': { color: 'green', rating: 'Business Friendly', description: 'Wyoming offers excellent business conditions with right-to-work laws, at-will employment, no state minimum wage above federal, and no mandatory sick leave or parental leave requirements.' }
};

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', function() {
    const stateSelect = document.getElementById('state-select');
    const contentArea = document.getElementById('content-area');
    
    // Populate state dropdown
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
    
    // Handle state selection
    stateSelect.addEventListener('change', function() {
        const selectedState = this.value;
        
        if (selectedState && stateData[selectedState]) {
            showStateInfo(selectedState);
            contentArea.classList.remove('hidden');
        } else {
            contentArea.classList.add('hidden');
        }
    });
});

function showStateInfo(state) {
    const data = stateData[state];
    const rating = businessRatings[state];
    
    // Update hiring requirements
    const hiringInfo = document.getElementById('hiring-info');
    hiringInfo.innerHTML = `
        <h3>${state} Hiring Requirements</h3>
        <ul>
            ${data.hiring.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
    
    // Update business risks
    const riskInfo = document.getElementById('risk-info');
    riskInfo.innerHTML = `
        <h3>${state} Business Risks</h3>
        <ul>
            ${data.risks.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
    
    // Update tax compliance links
    const taxInfo = document.getElementById('tax-info');
    taxInfo.innerHTML = `
        <h3>${state} Tax Compliance Resources</h3>
        <ul>
            ${data.taxLinks.map(link => `<li>${link}</li>`).join('')}
        </ul>
    `;
    
    // Update business friendliness rating
    const stoplightIndicator = document.getElementById('stoplight-indicator');
    const ratingText = document.getElementById('rating-text');
    const ratingDescription = document.getElementById('rating-description');
    
    // Clear previous classes
    stoplightIndicator.className = 'stoplight-light';
    ratingText.className = 'rating-text';
    
    // Add new color class
    stoplightIndicator.classList.add(rating.color);
    ratingText.classList.add(rating.color);
    
    // Update content
    ratingText.textContent = rating.rating;
    ratingDescription.textContent = rating.description;
}