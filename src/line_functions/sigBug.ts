export function sig_bug_line_split(line: string) {
  // clean the data
  let cleaned_string = line[0];
  for (let i = 1; i < line.length; i++) {
    let [prev, curr] = [line[i - 1], line[i]];
    if (prev !== ',' || curr !== ',') {
      cleaned_string += curr;
      continue;
    };

    // Both must be commas
    if (prev === curr) cleaned_string += 'null,'

  }
  const [form_id, brand_id, form_created, form_updated, owner_first_name, owner_last_name, sig, sig_first_name, sig_last_name, sig_date] = cleaned_string.split(',')

  const [start, end] = [new Date('06-26-2023'), new Date('07-07-2023')]
  const relevant_details = [new Date(form_created), new Date(form_updated), new Date(sig_date)]
  let has_within_range = false;
  for (const date of relevant_details) {
    if (!date) {
      has_within_range = true;
      break;
    }
    if (date < end && date > start) {
      has_within_range = true;
      break;
    }
  }

  if (!has_within_range) console.log("form id for has not within range: ", form_id)
}
