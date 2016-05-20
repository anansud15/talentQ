import { Injectable } from '@angular/core';
import { IApplicant } from '../applicants/applicant';

@Injectable()
export class ApplicantService {

	getApplicants(): IApplicant[] {
		return [
	        { "id": "00011", "name": "Mr. Nice", "city": "Santa Clara", "state": "California"},
	        { "id": "00012", "name": "Narco", "city": "Saddle River", "state": "New Jersey" },
	        { "id": "00013", "name": "Bombasto", "city": "Clifton", "state": "Nebraska" },
	        { "id": "00014", "name": "Celeritas", "city": "Phoenix", "state": "Arizona" },
	        { "id": "00015", "name": "Magneta", "city": "Phoenix", "state": "Arizona" },
	        { "id": "00016", "name": "RubberMan", "city": "Phoenix", "state": "Arizona" },
	        { "id": "00017", "name": "Dynama", "city": "Chicago", "state": "Illinois" },
	        { "id": "00018", "name": "Dr IQ", "city": "Newark", "state": "New Jersey" },
	        { "id": "00019", "name": "Magma", "city": "Phoenix", "state": "Arizona" },
	        { "id": "00020", "name": "Tornado", "city": "Phoenix", "state": "Arizona" }
    	];
	}
	
}